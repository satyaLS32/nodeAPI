var express = require('express');
var fs = require('fs')

var app = express();

var port = process.env.PORT||2200; 
var commanRouter = express.Router();

commanRouter.route('/getProduct')
    .get(function(req,res){
    	fs.readFile('db.json','utf-8',function(err,data){
            if(err){ throw err }
            res.send(data)
        })
		
});
commanRouter.route('/gettest')
    .get(function(req,res){
    	console.log("hiiiiiiiiiiiii")
		
});
app.use('/api', commanRouter);

app.get('/',function(req,res){
	res.send("Working")
});
app.listen(port, function(){
	console.log("running");
});