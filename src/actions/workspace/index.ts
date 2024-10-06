"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
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
      orderBy: {},
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
