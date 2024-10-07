"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { ActionResponse } from "@/lib/response";
import { CreateBoardInputType, CreateBoardReturnType } from "./types";
import { CreateSafeAction } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const getBoardsList = async (workspaceId: string) => {
  try {
    const session = await auth();
    const id = session?.user?.id;
    if (!id) {
      return ActionResponse(0, "Unauthorized user", null, "get-workspace-list");
    }
    const workspaceList = await prisma.board.findMany({
      where: { workspaceId },
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

export const createBoardHandler = async (
  data: CreateBoardInputType
): Promise<CreateBoardReturnType> => {
  let newCreatedBoard;
  try {
    const session = await auth();
    if (session && !session?.user?.id) {
      return {
        error: "Unauthorized user",
      };
    }

    const { title, gradientId, workspaceId } = data;

    newCreatedBoard = await prisma.board.create({
      data: {
        title,
        workspaceId,
        gradientId,
      },
    });
  } catch (error) {
    return {
      error:
        error instanceof Error ? error.message : "Failed to create new board",
    };
  }

  revalidatePath(`/workspaces/${data.workspaceId}/boards`);
  return { data: newCreatedBoard };
};

export const createBoard = CreateSafeAction(
  CreateBoardSchema,
  createBoardHandler
);
