import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { CreateWorkspaceSchema } from "./schema";
import { Workspace } from "@prisma/client";

export type InputType = z.infer<typeof CreateWorkspaceSchema>;
export type ReturnType = ActionState<InputType, Workspace>;
