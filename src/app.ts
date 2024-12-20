import express, {
    json,
    urlencoded,
    Express,
    Request,
    Response,
    NextFunction,
    Router,
} from 'express';
import cors from 'cors';
import path from 'path';
import { PORT } from './config';
import { ProductRouter } from './routers/product.router';


export default class App {
    private app: Express;

    constructor() {
        this.app = express();
        this.configure();
        this.routes();
        this.handleError();
    }

    private configure(): void {
        this.app.use(cors({ origin: ['https://manajemen-inventaris-fe.vercel.app/', "http://localhost:5173/"] }));
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use('/api/public', express.static(path.join(__dirname, "../public")));
    }

    private handleError(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            if (req.path.includes('/api/')) {
                res.status(404).send('Not found !');
            } else {
                next();
            }
        });

        this.app.use(
            (err: Error, req: Request, res: Response, next: NextFunction) => {
                if (req.path.includes('/api/')) {
                    console.error('Error : ', err.stack);
                    res.status(500).send('Error !');
                } else {
                    next();
                }
            },
        );
    }

    private routes(): void {
        // const sampleRouter = new SampleRouter();
        const productRouter = new ProductRouter()

        this.app.get('/api', (req: Request, res: Response) => {
            res.send(`Hello, Farraos ExpressJs Setup!`);
        });

        // this.app.use('/api/samples', sampleRouter.getRouter());
        this.app.use('/api/product', productRouter.getRouter())
    }

    public start(): void {

        this.app.listen(PORT, () => {
            console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
        });
    }
}
