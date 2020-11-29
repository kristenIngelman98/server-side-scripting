const express = require("express");
const app = express();

const server = app.listen(process.env.PORT || 8080,
  () => console.log("listening"));

// Static middleware allows us to easily serve static files
app.use(express.static("public"));





