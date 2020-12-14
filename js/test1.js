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

// var localTutor = require("./extentionADD.js");
// localTutor.NodeTutorial();
// localTutor.pTutor();

// var request = require("request");
//     request("http://www.baidu.com",function (error,response,body)
//     {
//         console.log(body);
//     });

var express = require("express");
// var jade = require("../jade/index.jade")
var app = express();
app.set('view engine','jade');
app.get('/',function (req,res) {
    // res.send('hello world');
    res.render("index",{title:'index',message:'welcome'});
});
app.route('/Node').get(function (req,res) {
    res.send("Turtorial Node");
});
app.route('/Angular').get(function (req,res) {
    res.send("turtorial on Angular");
});
var server = app.listen(3000,function () {});