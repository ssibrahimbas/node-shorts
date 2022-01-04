import {Express} from "express";
import {BaseRouter} from "./routes/router.config";

type ServerParams = {
    express: any;
    PORT: number;
};

interface IServer {
    $server: Express;
    $express: any;
    $PORT: number;

    start() : void;
    initRoutes(routes : Array<BaseRouter>) : void;
}

class Server implements IServer {
    $PORT: number;
    $express: any;
    $server: Express;

    constructor(params : ServerParams) {
        this.$server = params.express();
        this.$express = params.express;
        this.$PORT = params.PORT;
    };

    initRoutes = (routes : Array<BaseRouter>): void => {
        routes.forEach(route => {
            this.$server.use(`/api/${route.path}`, route.setRoutes());
        })
    };

    start = (): void => {
        this.initConfig();
        this.listen();
    };

    private initConfig = () : void => {
        this.$server.use(this.$express.json())
    };

    private listen = () : void => {
        this.$server.listen(this.$PORT, this.onListen);
    };

    private onListen = () : void => {
        console.log(`Server listen at: ${this.$PORT}`)
    }

}

export {
    IServer,
    Server,
    ServerParams
}