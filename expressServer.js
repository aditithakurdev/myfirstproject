const express = require('express')


const myServer=express(); // http.createServer();

myServer.use(function(req,res){
    res.send("hey aditi")
})

myServer.listen(7777
);

