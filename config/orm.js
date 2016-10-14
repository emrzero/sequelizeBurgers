var db = require('./connection.js');

db.connect(function(err) {
    if (err) {console.log(err)}
});

var orm = {
  selectAll : function(cb){
    var data = {
      burgers: [],
      eaten: []
    };

    db.query("SELECT * FROM burgers", function(err, rows){
      if (err) throw err;
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].devoured == "1"){
          data.eaten.push(rows[i]);
        }
  			else {
          data.burgers.push(rows[i]);
        }
  		}

      cb(data);
    });
  }
  , insertOne : function(burger_name){
    db.query("INSERT INTO burgers SET ?", {burger_name: burger_name}, function(err, res){
      if (err) throw err;
    });
  }
  , updateOne : function(id){
    db.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function(err, res){
      if (err) throw err;
    });
  }
}

module.exports = orm;
