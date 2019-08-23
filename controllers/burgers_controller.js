const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req,res) => {
    burger.selectAll(data => {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
});

router.post("/api/burgers", (req,res) => {
    burger.insertOne([
        "burger_name",
        "devoured"
    ], [
        req.body.name,
        req.body.devoured
    ], result => {
        res.json({id:result.insertId});
    });
});

router.put("/api/burgers/:id", (req,res) => {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.updateOne({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;