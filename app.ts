import express from 'express';
import { HttpError } from './src/error/http.error';
import feedRouter from './src/feed/feed.router';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/error', (req, res) => {
    throw new HttpError('not found', 404)
});

app.use('/feeds', feedRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

function errorHandler(err, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (err instanceof HttpError) {
        res.status(err.status).json({
            status: err.status,
            message: err.message,
        })
    } else {
        console.log(err.message)
        res.status(500).json({
            status: 500,
            message: 'internal server error'
        })
    }
}