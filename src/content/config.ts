import { defineCollection, z } from 'astro:content';

const animationsCollection = defineCollection({
  type: 'content',
  // Explicitly specify that we can use both .md and .mdx files
  extensions: ['.md', '.mdx'],
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    preview: z.string().optional(), // Path to preview GIF/MP4
    order: z.number().optional(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  'animations': animationsCollection,
};
