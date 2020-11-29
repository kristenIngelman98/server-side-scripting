const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
  res.render("index",  {animals:["red panda", "hyena", "dog", "cat"]});
});


const server = app.listen(process.env.PORT || 8080,
  () => console.log("listening"));