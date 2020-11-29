const express = require("express");
const router = express.Router();

//animal routes
router
.get("/", (req,res)=>{
    res.send(req.app.locals.data.animals);
})
.get("/:id", (req,res)=>{
    res.send(req.app.locals.data.animals[req.params.id]);
});

module.exports = router;