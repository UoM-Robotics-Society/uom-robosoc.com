import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    coverImage: image().optional(),
    draft: z.boolean().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    order: z.number().optional().default(2),
    coverImage: image().optional(),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const committee = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      year: z.string(),
      img: image().optional(),
      isCurrent: z.boolean().default(false),
      members: z.array(
        z.object({
          name: z.string(),
          fullName: z.string().optional(),
          role: z.string(),
          img: image().optional(),
          linkedin: z.string().url().optional(),
        })
      ),
    }),
});


export const collections = { work, blog, projects, legal, faq, committee }
