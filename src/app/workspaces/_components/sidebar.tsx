"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiHome, FiPlus } from "react-icons/fi";
import WorkspaceNavItem from "./workspace-nav-item";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type AccordionType = Record<string, boolean>;

const workspaces = [
  { label: "Workspace-1", id: "1" },
  { label: "Workspace-2", id: "2" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<AccordionType>({});
  const [defaultAccordionValue, setDefaultAccordionValue] = useState<string[]>(
    []
  );

  const getAccordionDefaultState = (state: AccordionType) => {
    const defaultAccordionValue: string[] = Object.keys(state).reduce(
      (acc: string[], curr: string) => {
        if (state[curr]) {
          acc.push(curr);
        }
        return acc;
      },
      []
    );

    return defaultAccordionValue;
  };

  const handleExpand = (id: string) => {
    const updatedState = { ...expanded, [id]: !expanded[id] };
    setExpanded(updatedState);
    setDefaultAccordionValue(getAccordionDefaultState(updatedState));

    localStorage.setItem("t-sidebar-state", JSON.stringify(updatedState));
  };

  useEffect(() => {
    const sidebarState = localStorage.getItem("t-sidebar-state");
    if (sidebarState) {
      const parsedState = JSON.parse(sidebarState);
      setExpanded(parsedState);

      setDefaultAccordionValue(getAccordionDefaultState(parsedState));
    }
  }, []);

  console.log(defaultAccordionValue);
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
        value={defaultAccordionValue}
        // defaultValue={defaultAccordionValue}
        className="mt-3"
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
