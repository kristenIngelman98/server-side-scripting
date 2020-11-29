const express = require("express");
const app = express();


app.set("view engine", "ejs");

const server = app.listen(process.env.PORT || 8080,
  () => console.log("listening"));