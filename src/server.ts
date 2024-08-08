import express, {Request, Response, Application, Router, NextFunction} from 'express';
import {IncomingMessage, ServerResponse} from "http";
import * as http from "http";

export class Server {

    /*
    const app = express();
    app.use(...)
    ...
    const server = http.createServer(app);
    server.listen(8080, () => { console.log('started'); })

    */

    private router: Router;
    private app:Application;
    private server:http.Server<typeof IncomingMessage, typeof ServerResponse>;

    constructor() {
        this.router = express.Router();
        this.app = express();
        this.app.use(express.json());
    }

    public addMiddleware(middleware: (req:Request, ser:Response, next:NextFunction) => Application) {
        this.app.use(middleware);
    }

    public useRouter(router: Router) {
        this.app.use(router);
    }

    public start(port:number) {
        this.server = this.app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    }

    public stop() {
        if (this.server) {
            this.server.close();
        }
    }
}