"use client";

import { Accordion } from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Workspace } from "@prisma/client";
import WorkspaceNavItem from "./workspace-nav-item";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CreateWorkspace from "./create-workspace";
import { useDialoge } from "@/hooks/use-dialoge";

type AccordionType = Record<string, boolean>;
type WorkspaceListProp = { workspaces: Workspace[] };

const WorkspaceList = ({ workspaces }: WorkspaceListProp) => {
  const { onOpen, isOpen, onClose, openFor } = useDialoge((state) => state);
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

  return (
    <div>
      <div className="flex items-center justify-between  mt-4">
        <span className="text-sm font-medium text-muted-foreground">
          Workspaces
        </span>
        <Button
          variant="outline"
          size="icon"
          className="size-7"
          onClick={() => onOpen("create-workspace")}
        >
          <FiPlus className="size-3" />
        </Button>
      </div>

      {workspaces.length > 0 ? (
        <Accordion
          type="multiple"
          value={defaultAccordionValue}
          className="mt-3"
        >
          {workspaces?.map((workspace) => (
            <WorkspaceNavItem
              key={workspace.id}
              isExpanded={expanded[workspace.id]}
              workspace={workspace}
              onExpand={handleExpand}
            />
          ))}
        </Accordion>
      ) : (
        <p className="text-muted-foreground text-xs text-center mt-4">
          You don&apos;t have any workspace yet
        </p>
      )}

      <CreateWorkspace
        mode="NEW"
        isOpen={isOpen && openFor === "create-workspace"}
        onClose={onClose}
      />
    </div>
  );
};
export default WorkspaceList;
