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

export const collections = { products, faq, gallery };
