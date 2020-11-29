const data = require("../data.json");

exports.getPlants = (req,res)=>{
  res.send(data.plants);
}

exports.getPlantById = (req,res)=>{
  res.send(data.plants[req.params.id]);
}