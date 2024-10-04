"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiHome, FiPlus } from "react-icons/fi";
import WorkspaceNavItem from "./workspace-nav-item";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";

type WorkspacePropType = {
  storageKey: string;
};

const workspaces = [
  { label: "Workspace-1", id: "1" },
  { label: "Workspace-2", id: "2" },
];

const Sidebar = ({ storageKey }: WorkspacePropType) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );

  const handleExpand = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !expanded[id],
    }));
  };

  console.log(expanded);
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "flex items-center gap-x-2 cursor-pointer hover:bg-secondary p-2 rounded-md",
          pathname === "/workspaces" && "bg-secondary"
        )}
      >
        <FiHome className="size-4" />
        <span className="text-sm font-medium">Home</span>
      </div>
      <div className="flex items-center justify-between px-2 mt-4">
        <span className="text-sm font-medium text-muted-foreground">
          Workspaces
        </span>
        <Button variant="outline" size="icon" className="size-7">
          <FiPlus className="size-3" />
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={[]} className="mt-3">
        {workspaces.map((workspace) => (
          <WorkspaceNavItem
            key={workspace.id}
            isExpanded={expanded[workspace.id]}
            workspace={workspace}
            onExpand={handleExpand}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default Sidebar;
