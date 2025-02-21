const Hapi = require ('@hapi/hapi');

const hapiServer = Hapi.server({port:7003});

hapiServer.route({
    method:'GET',
    path:'/',
    handler:()=>'Hello form Hapi Server',
});

const start= async()=>{
    await hapiServer.start();
    console.log(`Server is listening on port ${port}`);
}

start();
