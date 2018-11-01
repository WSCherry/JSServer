import * as express from 'express';
import { http } from 'uws';
import { Route } from './Route'
var app = express();

async.parallel({}, (error, result)=>{

    //消息分发
    app.use('/', Route.Request);

    var httpServer = http.createServer(app);
    httpServer.listen(3000);
})