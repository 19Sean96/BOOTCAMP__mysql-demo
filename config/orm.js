const connection = require("./connection");

console.log(connection);

const orm = {
    selectAll: function(tableInput,cb) {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, tableInput, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: function(tableInput, cols, vals, cb) {
      const queryString = "INSERT INTO ?? (?, ?) VALUES (? ?)";
      console.log(queryString);
      connection.query(queryString, [tableInput, cols, vals], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    updateOne: function(tableInput, col, condition, cb) {
      const queryString = "UPDATE ?? SET ? WHERE ?";
      connection.query(
        queryString,
        [tableInput, col, condition],
        function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        }
      );
    }
  };

  module.exports = orm;