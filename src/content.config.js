import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const projecten = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projecten" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            image: image(),
        }),
});

const quotes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/quotes" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            category: z.string().optional(),
            zinnetjes: z.array(
                z.object({
                    text: z.string(),
                    author: z.string(),
                })
            ),
            description: z.string(),
            images: z.array(image()).optional(),
        }),
});

export const collections = {
    projecten,
    quotes
};