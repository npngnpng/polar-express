import express from "express";
import { createFeed } from './feed.service'

const router = express.Router()

router.post('/', function (req, res) {
    createFeed(req.body.title, req.body.content)
        .then(message => res.json(message))
});

export default router;