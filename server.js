import http from 'http';




const server = http.createServer((req,res)=>{
    
    if(req.url ==="/token"){
        const generateNumber = Math.floor(Math.random() * 10);
       res.end(`token:5678`)  /*send plain text */
    }

});
server.listen("6005");

