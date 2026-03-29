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
            screen: image().optional(),
            category: z.union([z.string(), z.array(z.string())]).optional(),
            tools: z.union([z.string(), z.array(z.string())]).optional(),
            services: z.union([z.string(), z.array(z.string())]).optional(),
        }),
});

export const collections = {
    projecten
};