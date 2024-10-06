"use client";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import HomeItem from "@/app/workspaces/_components/home-item";
import { usePathname } from "next/navigation";
import { Workspace } from "@prisma/client";
import { getWorkspaceList } from "@/actions/workspace";
import { toast } from "sonner";
import WorkspaceList from "@/app/workspaces/_components/workspace-list";
// import Sidebar from "@/app/workspaces/_components/sidebar";

const MobileSidebar = () => {
  const { isOpen, onClose, onOpen } = useMobileSidebar((state) => state);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => setIsMounted(true), []);
  useEffect(() => onClose(), [pathname, onClose]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWorkspaceList();
        const { success, message } = response;
        if (!success) return toast.error(message);
        setWorkspaces(response.data as Workspace[]);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch workspaces");
      }
    })();
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Button
        variant="outline"
        className="rounded-full size-8 p-0"
        onClick={onOpen}
      >
        <CiMenuFries className="size-4" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-14">
          <SheetHeader className="hidden">
            <SheetTitle className="hidden" />
            <SheetDescription className="hidden" />
          </SheetHeader>
          <HomeItem />

          {workspaces?.length > 0 && <WorkspaceList workspaces={workspaces} />}
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileSidebar;
