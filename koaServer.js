const Koa = require ('koa');

const koaServer = new Koa();
const port = 7002;

koaServer.use(async(kser)=>{
    kser.body="hello form Koa server";
});

koaServer.listen(`Server is listening on port ${port}`);