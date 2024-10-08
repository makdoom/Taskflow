import { z } from "zod";

export const CreateWorkspaceSchema = z.object({
  name: z
    .string({ required_error: "Workspace name is required" })
    .min(3, { message: "Workspace name must be atleast 3 characters" }),
  gradientId: z.number(),
  website: z.string().optional(),
  description: z.string().optional(),
});
export type CreateWorspaceType = z.infer<typeof CreateWorkspaceSchema>;

export const EditWorkspaceSchema = CreateWorkspaceSchema.extend({
  id: z.string(),
});
export type EditWorkspaceType = z.infer<typeof EditWorkspaceSchema>;
