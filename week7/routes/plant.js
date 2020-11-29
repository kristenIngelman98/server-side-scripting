const express = require("express");
const router = express.Router();

const {getPlants, getPlantById} = require("../controllers/plantControllers.js");

//plant routes
router
.get("/", getPlants)
.get("/:id", getPlantById);

module.exports = router;