const express = require("express");
const router = express.Router();

const {getAnimals, getAnimalById} = require("../controllers/animalControllers.js");

//animal routes
router
.get("/", getAnimals)
.get("/:id", getAnimalById);

module.exports = router;