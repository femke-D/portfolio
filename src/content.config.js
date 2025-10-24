import { defineCollection, z } from "astro:content";

const projecten = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        skills: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});

export const collections = { projecten };
