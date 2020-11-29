const express = require("express");
const app = express();

const server = app.listen(process.env.PORT || 8080, ()=>console.log("listening"));

app.use(express.static("public"));

app.locals.dogs = require("./data.json").dogs;

app.get("/api/dogs", (req,res)=>{
    
    res.send(app.locals.dogs);
}); 

app.post("/api/dogs", (req,res)=>{
   
    app.locals.dogs.push(req.body);
    res.status(201).send(req.body);
}); 

