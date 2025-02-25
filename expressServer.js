const express = require('express')

const myServer=express(); // http.createServer();
const port =3005

myServer.use(function(req,res){
    res.send("hey aditi")
})

myServer.listen(`Server is listing on port: ${port}`);

