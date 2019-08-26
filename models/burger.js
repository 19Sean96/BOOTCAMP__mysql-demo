const orm = require("../config/orm");
const util = require('util');

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    insertOne: function(cols,vals,cb) {
        orm.insertOne("burgers", cols,vals,res=> {
            cb(res);
        });
    },

    updateOne: function(col,condition, cb) {
        orm.updateOne("burgers", col,condition,res=> {
            cb(res);
        });
    }
}

module.exports = burger;