const Fastify = require ('fastify');

const port = 7701;

const fastifyServer= Fastify();

 fastifyServer.get('/',()=>{
    console.log('Hello world from fastify');
 });

 fastifyServer.listen(`Server is listening on port ${port}`);

