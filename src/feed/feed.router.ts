import express from "express";
import { createFeed, queryFeed } from './feed.service'

const router = express.Router()

router.post('/', (req, res) => {
    createFeed(req.body.title, req.body.content)
        .then(message => res.json(message))
});

router.get('/:id', (req, res) => {
    queryFeed(Number(req.params.id))
        .then(response => res.json(response))
});

export default router;