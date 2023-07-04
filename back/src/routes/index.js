const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let fav = require("../utils/favs");
const { createRecord } = require("../Users/controller/create");
const { paintRecord } = require("../Users/controller/getUsers");

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/", createRecord)

router.get("/", paintRecord);

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params;
    fav = fav.filter(char => char.id !== Number(id));
    return res.status(200).json(fav)
});

module.exports = router