import express from "express";
import { createFeed, queryFeed } from './feed.service'

const router = express.Router()

router.post('/', async (req, res) => {
    res.json(await createFeed(req.body.title, req.body.content))
});

router.get('/:id', async (req, res) => {
    res.json(await queryFeed(Number(req.params.id)))
});

export default router;