var express = require('express')
var app = express()
var http = require('http')
var path = require("path")
const db = require('./dbconnect')

db.create()
app.get('/', function (req, res){
	res.sendFile(path.join('/home/kavya/myApp'+'/login.html'), msg="")
})

app.post('/',function (res,req){
 var data = db.fetch()
 var flag1 = 0
 var flag2 = 0
 var pwd = request.form("pwd")
 var uname = request.form("uname")
 for(var i=0; i<data.length; i++){
	if(data[i][0]==uname){
		flag1=1	
		if(data[i][1]==pwd){
			flag2=1
		}
		else{
			flag2=0
		}
	}
	else{
		flag1=0
	}
	if (flag1==0){
		res.redirect('/register')
	}
	else{
		if (flag2==0){
			res.sendFile(path.join('/home/kavya/myApp'+'login.html'), msg="Invalid password")
		}
		else{
			res.send("Successfully logged in")
		}
	}
 }
})

app.get('/register', function(res,req){
 res.sendFile(path.join('/home/kavya/myApp'+'register.html'))
})

app.post('/register', function(res,req){
 db.insert(request.form("uname"),request.form("pwd"))
})
 
app.listen(3000, function() {
	console.log('App listening on port 3000!')
})



