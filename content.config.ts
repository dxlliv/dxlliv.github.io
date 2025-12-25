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
                portfolio: z.object({
                    large: z.boolean().optional()
                }).optional(),
                storycase: z.string().optional(),
                published: z.boolean(),
                cover: z.string(),
            })
        }),
        storycase: defineCollection({
            source: 'storycase/**/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                datePublished: z.string(),
                dateModified: z.string(),
                related: z.array(z.string()),
                blocks: z.array(
                    z.array(
                        z.discriminatedUnion("type", [
                            z.object({
                                type: z.literal("title"),
                                title: z.string(),
                                heading: z.string().optional()
                            }),
                            z.object({
                                type: z.literal("text"),
                                align: z.string().optional(),
                                text: z.string(),
                                heading: z.string().optional()
                            }),
                            z.object({
                                type: z.literal("configurator"),
                            }),
                            z.object({
                                type: z.literal("spacer"),
                            }),
                            z.object({
                                type: z.literal("reel"),
                                title: z.string(),
                                orientation: z.string(),
                                src: z.string()
                            }),
                            z.object({
                                type: z.literal("hero"),
                                title: z.string(),
                                text: z.string(),
                                preset: z.string().optional()
                            }),
                        ]),
                    )
                ),
                columns: z.array(
                    z.array(
                        z.discriminatedUnion("type", [
                            z.object({
                                type: z.literal("reel"),
                                title: z.string(),
                                src: z.string()
                            }),
                            z.object({
                                type: z.literal("gallery"),
                                title: z.string(),
                                description: z.string().optional(),
                                gallery: z.array(
                                    z.object({
                                        type: z.string().optional(),
                                        src: z.string(),
                                        alt: z.string().optional(),
                                        large: z.boolean().optional()
                                    })
                                )
                            }),
                            z.object({
                                type: z.literal("contacts"),
                                title: z.string(),
                                email: z.string().optional(),
                                phone: z.string().optional()
                            }),
                            z.object({
                                type: z.literal("company"),
                                company: z.object({
                                    logo: z.string()
                                }),
                                title: z.string(),
                                content: z.string()
                            }),
                            z.object({
                                type: z.literal("text"),
                                title: z.string(),
                                content: z.string()
                            }),
                            z.object({
                                type: z.literal("video"),
                                src: z.string(),
                            }),
                            z.object({
                                type: z.literal("configurator"),
                            }),
                            z.object({
                                type: z.literal("spacer"),
                            }),
                            z.object({
                                type: z.literal("youtube"),
                                id: z.string()
                            }),
                            z.object({
                                type: z.literal("year"),
                                year: z.string()
                            })
                        ])
                    )
                )
            })
        }),
    }
})