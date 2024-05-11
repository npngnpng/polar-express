import type { ErrorRequestHandler } from 'express';
import { HttpError } from './http.error';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
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
};
