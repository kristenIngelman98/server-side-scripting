// animalControllers.js

const data = require("../data.json");

exports.getAnimals = (req,res)=>{
  res.send(data.animals);
}

exports.getAnimalById = (req,res)=>{
  res.send(data.animals[req.params.id]);
}