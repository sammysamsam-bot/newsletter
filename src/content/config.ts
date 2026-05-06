import { defineCollection, z } from 'astro:content';

const briefs = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    category: z.enum(['tech', 'ai', 'science', 'politics', 'food', 'podcasts']),
    summary: z.string().optional(),
    lead: z.string().optional(),
  }),
});

export const collections = { briefs };
