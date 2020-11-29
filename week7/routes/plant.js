const express = require("express");
const router = express.Router();

//plant routes
router
.get("/", (req,res)=>{
    res.send(req.app.locals.data.plants);
})
.get("/:id", (req,res)=>{
    res.send(req.app.locals.data.plants[req.params.id]);
});

module.exports = router;