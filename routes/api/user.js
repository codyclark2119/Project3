const express = require("express");
const router = express.Router();
const db = require("../../models/index.js");

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post("/", function(req,res){
    db.User.create(req.body, function(err, response){
        if (err){
            return res.json(err);
        }

        return res.json(response);
    })
});

router.put("/:id", function(req,res){
    res.send("Update Users")
});

router.delete("/:id", function(req,res){
    res.send("Delete Users")
});

module.exports = router;
