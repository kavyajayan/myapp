var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('database.db')
var data=[]

module.exports = {
	create: function () {
  db.run('CREATE TABLE IF NOT EXISTS LOGIN (num integer PRIMARY KEY AUTOINCREMENT, username char(20), password char(20))')
},

	insert: function(uname,pwd){
 	var stmt = db.prepare('INSERT INTO LOGIN(username,password) VALUES (?,?)')
 	stmt.run(uname,pwd)
},


	fetch: function() {
 db.each('SELECT username, password from LOGIN', function(a){
  data.push(a)
 })
 return data
	}
};



