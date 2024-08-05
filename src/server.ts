import express, {Express, Request, Response, Application, Router} from 'express';

export class Server {

    private server:Application;

    constructor() {
        this.server = express();
    }

    public useRouter(router: Router) {
        this.server.use(router);
    }

    public start(port:number) {
        this.server.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    }

    public stop() {
        if (this.server) {
            console.log('server closed')
        }
    }
}