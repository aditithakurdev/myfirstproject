//http web server
// const http = require("http")
// const http = require("node:hhtp");

import http from "node:http";

const server = http.createServer(function(req,res){  ///res and res are object 
// console.log("req",typeof(req));
// console.log("req",typeof(res));
if(req.url==="/aunty"){
    res.end("teri aunty hai ")
}
// console.log("Req",req);
console.log("port",req.url); //req from root
res.end("hello mrj")


});

server.listen(3005);
