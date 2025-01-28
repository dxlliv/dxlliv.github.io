import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        archive: defineCollection({
            source: 'archive/**/*.md',
            type: 'page',
            schema: z.object({
                year: z.number(),
                episode: z.string(),
                created_at: z.string(),
                published: z.boolean(),
                cover: z.string(),
            })
        })
    }
})