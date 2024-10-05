"use server";

import { auth } from "@/auth";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { CreateSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const session = await auth();
  if (session && !session?.user?.id) {
    return {
      error: "Unauthorized user",
    };
  }

  const { title } = data;
  let board;
  try {
    board = await prisma.board.create({ data: { title } });
  } catch (error) {
    return {
      error:
        error instanceof Error ? error.message : "Failed to create new board",
    };
  }

  // Need to revalidate board path here
  return { data: board };
};

export const createBoard = CreateSafeAction(CreateBoard, handler);
