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
        // const queryString = "INSERT INTO ?? (?, ?) VALUES (? ?)";
        let colString = JSON.stringify(cols).replace(/"/g, "");
        colString = colString.substring(1, colString.length - 1);
        let queryString = `INSERT INTO ${tableInput} (${colString}) VALUES (?, ?)`;
        devoured = (vals.devoured === 'true') ? 1 : 0;
        name = Object.values(vals)[0];

        connection.query(queryString, [name, devoured], function(err, result) {
          if (err) console.log(err, result);
          cb(result);
        });
    },

    updateOne: function(tableInput, col, condition, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableInput, col, condition], function(
            err,
            result
        ) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
