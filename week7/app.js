const express = require("express");
const app = express();

const server = app.listen(8080, ()=>console.log("listening"));

app.locals.data = require("./data.json");



const router = require("./routes/index.js");
// passing in the router middleware using the app.use() method
app.use("/api", router);

