import { RouteUnit } from './RouteUnit';
var ProtoBuf = require("protobuffjs");
var root = ProtoBuf.loadSync("./message/proto/testa.proto");
var awesomeMessage = root.lookupType("ceshipackage.textMesssage");

export class Route {
    public static Request() : any {
        return function(req :any, res : any, next : any){
            this.handleRequest(req, res, function(err, data){
                if(err) {
                    return;
                }

                //返回消息
            });
        }
    }

    //消息分类处理
    protected static handleRequest(req : any, res : any, cb : any) : void {
        var routeData : RouteUnit = req.RouteUnit;
        var route : string = routeData.route;
        var type : any = route.split('.');

        switch(type)
        {
            default:
            {
                
            }
        }
    }
}