"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FiHome, FiPlus } from "react-icons/fi";

import { useLocalStorage } from "usehooks-ts";
import WorkspaceNavItem from "./workspace-nav-item";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const workspaces = [
  { label: "Workspace-1", id: "1" },
  { label: "Workspace-2", id: "2" },
];

type SidebarProps = {
  storageKey: string;
};

const Sidebar = ({ storageKey = "tf-sidebar-state" }: SidebarProps) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );

  console.log(pathname);

  console.log(storageKey);

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], curr: string) => {
      if (expanded[curr]) {
        acc.push(curr);
      }

      return acc;
    },
    []
  );

  const handleExpand = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !expanded[id],
    }));
  };

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

      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="mt-2"
      >
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
