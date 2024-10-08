"use server";

import { auth } from "@/auth";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { CreateSafeAction } from "@/lib/create-safe-action";
import {
  CreateWorkspaceSchema,
  EditWorkspaceSchema,
  EditWorkspaceType,
} from "./schema";
import { revalidatePath } from "next/cache";
import { ActionResponse } from "@/lib/response";

export const getWorkspaceList = async () => {
  try {
    const session = await auth();
    const id = session?.user?.id;
    if (!id) {
      return ActionResponse(0, "Unauthorized user", null, "get-workspace-list");
    }
    const workspaceList = await prisma.workspace.findMany({
      where: { userId: id },
      orderBy: { createdAt: "desc" },
    });
    return ActionResponse(
      1,
      `Workspaces list fetched successfully`,
      workspaceList,
      "get-workspace-list"
    );
  } catch (error) {
    console.log("🚀 ~ getWorkspaceList ~ error:", error);
    throw error;
  }
};

export const getCurrentWorkspaceInfo = async (workspaceId: string) => {
  try {
    const session = await auth();
    const id = session?.user?.id;
    if (!id) {
      return ActionResponse(0, "Unauthorized user", null, "get-workspace-list");
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    });
    return ActionResponse(
      1,
      `Workspace fetched successfully`,
      workspace,
      "get-workspace"
    );
  } catch (error) {
    console.log("🚀 ~ getCurrentWorkspaceInfo ~ error:", error);
    throw error;
  }
};

const editWorkspaceHandler = async (
  data: EditWorkspaceType
): Promise<ReturnType> => {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) {
    return {
      error: "Unauthorized user",
    };
  }
  let newWorkspace;
  try {
    newWorkspace = await prisma.workspace.update({
      where: { id: data.id },
      data: { ...data },
    });
  } catch (error) {
    return {
      error:
        error instanceof Error ? error.message : "Failed to update workspace",
    };
  }

  revalidatePath(`/workspaces/${data.id}/boards`, "layout");
  console.log("revalidated");
  return { data: newWorkspace };
};

export const editWorkspace = CreateSafeAction(
  EditWorkspaceSchema,
  editWorkspaceHandler
);

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

  revalidatePath("/workspaces", "layout");
  console.log("revalidated");
  return { data: newWorkspace };
};

export const createWorkspace = CreateSafeAction(CreateWorkspaceSchema, handler);
