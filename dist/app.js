"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_error_1 = require("./src/error/http.error");
const feed_router_1 = __importDefault(require("./src/feed/feed.router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/error', (req, res) => {
    throw new http_error_1.HttpError('not found', 404);
});
app.use('/feeds', feed_router_1.default);
app.use((err, req, res, next) => {
    if (err instanceof http_error_1.HttpError) {
        res.status(err.status).json({
            status: err.status,
            message: err.message,
        });
    }
    else {
        console.log(err.message);
        res.status(500).json({
            status: 500,
            message: 'internal server error'
        });
    }
    next();
});
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
