"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GRADIENTS } from "@/constants/gradients";
import { useBoardSidebar } from "@/hooks/use-board-sidebar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { GoSidebarExpand } from "react-icons/go";

type SidebarTogglePropType = {
  children: ReactNode;
};

const SidebarToggle = ({ children }: SidebarTogglePropType) => {
  const { isOpen, toggle } = useBoardSidebar((state) => state);

  return (
    <div
      className={cn(
        "w-64 px-2 fixed top-12 left-0 h-screen shadow-lg bg-background transition-transform transform",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center gap-x-3 justify">
          <Avatar className="size-8 rounded-md">
            <AvatarFallback
              className={`rounded-md text-white ${GRADIENTS?.[5]}`}
            >
              W
            </AvatarFallback>
          </Avatar>

          <span className={cn("text-xs sm:text-sm")}>Workspace</span>
        </div>
        <Button variant="ghost" size="icon" onClick={toggle}>
          <GoSidebarExpand className="size-5" />
        </Button>
      </div>

      <div className={cn("hidden md:block")}>{children}</div>
    </div>
  );
};
export default SidebarToggle;
