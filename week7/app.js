const express = require("express");
const app = express();

const server = app.listen(8080, ()=>console.log("listening"));

app.locals.data = require("./data.json");

// //animal and plant api 
app.get("/api/animals", (req,res)=>{
    res.send(app.locals.data.animals);
});
app.get("/api/animals/:id", (req,res)=>{
    res.send(app.locals.data.animals[req.params.id]);
});
app.get("/api/plants/", (req,res)=>{
    res.send(app.locals.data.plants);
});
app.get("/api/plants/:id", (req,res)=>{
    res.send(app.locals.data.plants[req.params.id]);
});

