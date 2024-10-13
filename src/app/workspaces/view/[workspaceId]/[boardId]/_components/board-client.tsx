"use client";

import { Button } from "@/components/ui/button";
import { GRADIENTS } from "@/constants/gradients";
import { useBoardSidebar } from "@/hooks/use-board-sidebar";
import { cn } from "@/lib/utils";
import { Board } from "@prisma/client";
import { GoSidebarCollapse } from "react-icons/go";

type BoardClientType = {
  boardInfo: Board;
};

const BoardClient = ({ boardInfo }: BoardClientType) => {
  const { isOpen, toggle } = useBoardSidebar((state) => state);

  console.log(boardInfo);
  return (
    <div
      className={cn(
        `w-full ${GRADIENTS[boardInfo?.gradientId ?? 1]}`,
        isOpen ? "pl-64" : "pl-2"
      )}
    >
      <Button onClick={toggle} size="icon" variant="ghost">
        <GoSidebarCollapse />
      </Button>

      {boardInfo?.title}
    </div>
  );
};
export default BoardClient;
