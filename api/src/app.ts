import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import IController from './shared/IController';

class App {
    app: express.Application;
    port: number;
    router: express.Router;

    constructor(controllers: Array<IController>, port: number) {
        this.app = express();
        this.port = port;
        this.router = express.Router();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    private initializeControllers(controllers: Array<IController>) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });  
    }
}
export default App;