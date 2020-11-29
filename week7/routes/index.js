const express = require("express");
const router = express.Router();

//animal and plant api 
const animalRouter = require("./animal.js");
const plantRouter = require("./plant.js");

router.use("/animals", animalRouter);
router.use("/plants", plantRouter);


module.exports = router;