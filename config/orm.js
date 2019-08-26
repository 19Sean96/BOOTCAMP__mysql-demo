const connection = require("./connection");

console.log(connection);

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(tableInput, cols, vals, cb) {
        let colString = JSON.stringify(cols).replace(/"/g, "");
        colString = colString.substring(1, colString.length - 1);
        let queryString = `INSERT INTO ${tableInput} (${colString}) VALUES (?, ?)`;
        const devoured = (vals.devoured === 'true') ? 1 : 0;
        const name = Object.values(vals)[0];

        connection.query(queryString, [name, devoured], function(err, result) {
          if (err) console.log(err, result);
          cb(result);
        });
    },

    updateOne: function(tableInput, cols, condition, cb) {
        // const queryString = "UPDATE ?? SET ? WHERE ?";

        const colKeys = Object.keys(cols);
        const colVals = Object.values(cols);
        console.log(colKeys);
        console.log(colVals);
        const queryString = `UPDATE ${tableInput} SET ${colKeys[1]} = ${colVals[1]} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, (err,result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
