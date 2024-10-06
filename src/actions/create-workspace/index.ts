"use server";

import { auth } from "@/auth";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { CreateSafeAction } from "@/lib/create-safe-action";
import { CreateWorkspaceSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) {
    return {
      error: "Unauthorized user",
    };
  }
  const { name, website, description, gradientId } = data;
  let newWorkspace;
  try {
    newWorkspace = await prisma.workspace.create({
      data: {
        name,
        gradientId,
        website,
        description,
        userId: id,
      },
    });
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to create new workspace",
    };
  }

  return { data: newWorkspace };
};

export const createWorkspace = CreateSafeAction(CreateWorkspaceSchema, handler);
