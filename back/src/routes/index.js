const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let fav = require("../utils/favs");

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/fav", (req, res) => {
    fav.push(req.body)
    return res.status(200).json("Agregado con Exito")
});

router.get("/fav", (req, res) => {
    return res.status(200).json(fav)
});

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params;
    fav = fav.filter(char => char.id !== Number(id));
    return res.status(200).json(fav)
});

module.exports = router