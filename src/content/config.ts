// 1. Import utilities from `astro:content`
import { z, defineCollection, CollectionEntry } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishedDate: z.date(),
    draft: z.boolean(),
  }),
});

const blogs = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishedDate: z.date(),
    draft: z.boolean(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = { projects, blogs };