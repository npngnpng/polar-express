import express from 'express';
import { HttpError } from './src/error/http.error';
import { errorHandler } from './src/error/error.handler'
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
