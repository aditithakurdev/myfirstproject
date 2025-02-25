//http web server
const http = require("http");
const { text } = require("stream/consumers");
// const http = require("node:hhtp");
// import http from "node:http";

const server = http.createServer(function (req, res) {  ///res and res are object 
    console.log("req", typeof (req));
    console.log("req", typeof (res));
    if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Home Page ")
        res.end()
    }
    else if (req.url === "/dashboard") {

        //basically we have an object javascript object 
        const data = {
            name: "mrj",
            age: 29,
            message: "success"
        }
        const aarry = ["fruti", "jam"];
        // res.writeHead(200, {
        //     "Content-Type": "application/json",
        //     "name": "aditii"
        // });netnet
        res.write(JSON.stringify(aarry)); // string  {"name ":"mrj"}
        res.end();
    }
    else if (req.url === "/datajson") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(data)
        res.end()
    }
    // console.log("Req", req);
    // console.log("port", req.url); //req from root
    res.writeHead(200, { "Content-Type": "text/plain" }); // backend 
    res.write("aditi");
    res.end();

});

server.listen(3005);
