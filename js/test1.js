// var http = require('http');
// http.createServer(function (req,res){
//     res.writeHead(200,{'content-Type':'text/html'});
//     res.end('hello world');
// }).listen(8080);

//
// var express = require('express');
// var app = express();
// app.set('view emngine','jade');
// app.get('/',function (req,res) {
// });
// var server = app.listen(3000,function (){
//     console.log("it's me")
// });

// var Addition = require('./Addition.js');
// console.log(Addition.AddNumber(2,3));

var localTutor = require("./extentionADD.js");
localTutor.NodeTutorial();
localTutor.pTutor();