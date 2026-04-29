import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Réglementation', 'Technique', 'Diagnostic', 'Sécurité', 'Actualité', 'Conseil']),
    readTime: z.string(),
    datePublished: z.string(),
    dateModified: z.string().optional(),
    tags: z.array(z.string()),
    relatedService: z.object({
      href: z.string(),
      label: z.string(),
    }),
    /** Photo ou image illustration (chemin relatif depuis /public) */
    ogImage: z.string().optional(),
    /** Mots-clés supplémentaires pour le schema Article */
    keywords: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
