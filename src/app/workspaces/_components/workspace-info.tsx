"use client";

import { getCurrentWorkspaceInfo } from "@/actions/workspace";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Workspace } from "@prisma/client";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { CiLock } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { GRADIENTS } from "@/constants/gradients";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FiEdit2 } from "react-icons/fi";

const WorkspaceInfo = () => {
  const pathname = usePathname();
  const [workspace, setWorkspace] = useState<Workspace | null>(null);

  const getWorkspaceInfo = useCallback(async () => {
    try {
      const workspaceId = pathname.split("/").at(2);
      if (!workspaceId) return;

      const response = await getCurrentWorkspaceInfo(workspaceId);
      const { data, success, message } = response;
      if (!success) return toast.error(message);

      setWorkspace(data as Workspace);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(
        "Failed to fetch current workspace information, Please try again"
      );
    }
  }, [pathname]);

  useEffect(() => {
    getWorkspaceInfo();
  }, [getWorkspaceInfo]);

  if (workspace == null) {
    // Add skeleton loading
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex gap-x-3">
        <Avatar className="size-14 rounded-lg">
          <AvatarFallback
            className={`rounded-lg text-2xl font-medium text-white ${
              GRADIENTS[workspace?.gradientId]
            }`}
          >
            {workspace?.name?.[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1.5">
          <div className="flex items-center gap-x-2">
            <h2 className="text-xl font-semibold">{workspace?.name}</h2>
            <Button size="icon" className="size-7 p-0" variant="outline">
              <FiEdit2 className="size-3" />
            </Button>
          </div>
          <div className="flex items-center gap-x-6 space-y-1">
            <div className="flex items-center gap-x-1 text-muted-foreground">
              <CiLock />
              <span className="text-sm">Private</span>
            </div>

            {workspace.website && (
              <Link href={workspace?.website} target="_blank" className="!mt-0">
                <div className="flex items-center gap-x-1 text-muted-foreground hover:text-primary">
                  <IoIosLink />
                  <span className="text-sm">https://makdoom.github.io</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{workspace.description}</p>
      </div>

      <Separator className="mt-6" />
    </div>
  );
};
export default WorkspaceInfo;
