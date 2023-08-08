import { z } from 'zod';

const GeneralBlogSchema = z.object({
  title: z.string(),
  likes: z.number(),
  author: z.string(),
});

const CommentSchema = z.object({
  content: z.string(),
  date: z.string(),
  author: z.string(),
});
export const BlogDetailSchema = GeneralBlogSchema.extend({
  comments: z.array(CommentSchema),
  content: z.string(),
  likes: z.number(),
  likedByMe: z.boolean(),
});

export const BlogEntrySchema = GeneralBlogSchema.extend({
  id: z.number(),
  contentPreview: z.string(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
});

export type BlogEntry = z.infer<typeof BlogEntrySchema>;
export type BlogDetail = z.infer<typeof BlogDetailSchema>;
