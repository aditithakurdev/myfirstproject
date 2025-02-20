//http web server
const http = require("http")
const http = require("node:hhtp");

import http from "node:http";

const server = http.createServer(function(req,res){  ///res and res are object 
// console.log("req",typeof(req));
// console.log("req",typeof(res));
if(req.url==="/home"){
    res.end("You are at home page")
}
// console.log("Req",req);
console.log("port",req.url); //req from root
res.end("hello ")


});

// server.listen(3005);




