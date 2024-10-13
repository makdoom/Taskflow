"use client";

import { Button } from "@/components/ui/button";
import { GRADIENTS } from "@/constants/gradients";
import { cn } from "@/lib/utils";
import { Board } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type BoardSidebarItemPropType = {
  name: string;
  isBoardItem: boolean;
  icon?: ReactNode;
  isSelected?: boolean;
  board?: Board;
  workspaceId: string;
};

const BoardSidebarItem = ({
  name,
  icon,
  isBoardItem = false,
  isSelected = false,
  board,
  workspaceId,
}: BoardSidebarItemPropType) => {
  const router = useRouter();
  const handleClick = (boardId: string) => {
    router.push(`/workspaces/view/${workspaceId}/${boardId}`);
  };

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full text-start font-normal justify-start text-muted-foreground gap-x-2 my-1 px-3",
        isSelected && "bg-secondary"
      )}
      onClick={isBoardItem && board ? () => handleClick?.(board?.id) : () => {}}
    >
      {isBoardItem ? (
        <div
          className={`h-6 w-7 rounded-md ${GRADIENTS[board?.gradientId || 1]}`}
        />
      ) : (
        icon
      )}
      <span className="text-xs sm:text-sm">{name}</span>
    </Button>
  );
};
export default BoardSidebarItem;
