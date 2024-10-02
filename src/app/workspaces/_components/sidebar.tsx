"use client";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

// import { useLocalStorage } from "usehooks-ts";

type SidebarProps = {
  storageKey: string;
};

const Sidebar = ({ storageKey = "tf-sidebar-state" }: SidebarProps) => {
  // const [expanded, setIsExpanded] = useLocalStorage<Record<string, unknown>>(
  //   storageKey,
  //   {}
  // );

  console.log(storageKey);

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Workspaces</span>
        <Button variant="outline" size="icon" className="size-7">
          <FiPlus className="size-3" />
        </Button>
      </div>
    </div>
  );
};
export default Sidebar;
