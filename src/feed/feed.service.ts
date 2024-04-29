import prisma from '../prisma/prisma'
import { HttpError } from '../error/http.error'
import { Feed } from './feed.model'

const feedRepository = prisma.feed;

export async function createFeed(title: string, content: string) {
    const feed: Feed = await feedRepository.create({
        data: {
            title: title,
            content: content,
        }
    })

    return {
        message: `success to create feed ${feed.title}`
    }
}

export async function queryFeed(id: number) {
    const feed: Feed | null = await feedRepository.findUnique({
        where: {
            id: id,
        }
    });
    if (!feed) {
        throw new HttpError('feed not found', 404);
    }

    return {
        title: feed.title,
        content: feed.content,
    };
}