const { Router } = require("express");
const router = Router();
const getCharDetail = require("../controllers/getCharDetail");
let fav = require("../utils/favs");
const { createRecord } = require("../Users/controller/create");
const { paintRecordUsers } = require("../Users/controller/getUsers");
const { getCharAll, get_characters } = require("../Characters/controllers/charAll");


router.get("/detail/:id", getCharDetail);

router.post("/", createRecord)

router.get("/users", paintRecordUsers);

router.get('/', getCharAll)
router.get('/characters', get_characters )

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params;
    fav = fav.filter(char => char.id !== Number(id));
    return res.status(200).json(fav)
});

module.exports = router