import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    href: z.string().default("#contact"),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/gallery" }),
  schema: z.object({
    image: z.string(),
    alt: z.string(),
    rowSpan: z.number().default(1),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/site" }),
  schema: z.object({
    company: z.object({
      name: z.string(),
      fullName: z.string(),
      subtitle: z.string(),
      tagline: z.string(),
      slogan: z.string(),
    }),
    contact: z.object({
      phone: z.string(),
      email: z.string(),
      whatsapp: z.string(),
      hours: z.string(),
    }),
    social: z.object({
      linkedin: z.string(),
      instagram: z.string(),
      facebook: z.string(),
    }),
    seo: z.object({
      defaultTitle: z.string(),
      defaultDescription: z.string(),
      siteUrl: z.string(),
    }),
  }),
});

export const collections = { products, faq, gallery, site };
