const express = require('express');
const burger = require('../models/burger');
const util = require('util');

const router = express.Router();

router.get("/", (req,res) => {
    burger.selectAll(data => {
        data.forEach(burger => {
            burger.devoured = (burger.devoured == 1) ? true : false;
        });
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
    ], req.body, result => {
        res.json({id:result.insertId});
    });
});

router.put("/api/burgers/:id", (req,res) => {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);
    console.log(req.body);
    burger.updateOne(req.body, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;