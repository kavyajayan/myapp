var express = require('express')
var app = express()
var http = require('http')
var path = require("path")
var db = require('./dbconnect')
var bodyParser=require('body-parser')

db.create()
app.get('/', function (req, res){
	return res.sendFile(path.join('/home/kavya/myApp'+'/login.html'))
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/',function (req,res){
 var data= db.fetch()
 console.log(data)
 var flag1 = 0
 var flag2 = 0
 var pwd = req.body.pwd;
 var uname = req.body.uname;
 for(var i=0; i<data.length; i+=1){
	if(data[i][0]==uname){
		flag1=1;	
		if(data[i][1]==pwd){
			console.log("Entering pwd correct loop")
			flag2=1
		}
		else{
			console.log("Entering inval pwd loop1")
			flag2=0
		}
	}
	else{
		flag1=0
	}
 }
	if (flag1==0){
		 return res.redirect('/register')
	}
	else{
		if (flag2==0){
			console.log("Entering inval pwd loop2")
			return res.sendFile(path.join('/home/kavya/myApp/'+'invalpwd.html'))
		}
		else{
			return res.send("Successfully logged in")
		}
	}
})

app.get('/register', function(req,res){
 return res.sendFile(path.join('/home/kavya/myApp/'+'register.html'))
})

app.post('/register', function(req,res){
 db.insert(req.body.uname,req.body.pwd)
 return res.redirect('/')
})
 
app.listen(3000, function() {
	console.log('App listening on port 3000!')
})

