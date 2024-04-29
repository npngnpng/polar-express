import prisma from '../prisma/prisma'
import { Feed } from './feed.model'

export async function createFeed(title: string, content: string) {
    const feed: Feed = await prisma.feed.create({
        data: {
            title: title,
            content: content,
        }
    })

    return {
        message: `success to create feed ${feed.title}`
    }
}