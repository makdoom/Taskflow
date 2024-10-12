"use client";

import { Button } from "@/components/ui/button";
import CreateWorkspace from "@/app/workspaces/_components/create-workspace";
import { useDialoge } from "@/hooks/use-dialoge";

const HomeComponent = () => {
  const { isOpen, onOpen, onClose, openFor } = useDialoge((state) => state);

  return (
    <div className="w-full flex justify-center items-center flex-col space-y-10">
      <div className="flex flex-col space-y-2 items-center px-2 md:px-4">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold">
          Welcome back Makdoom Shaikh 👋 !!
        </h1>
        <span className="text-center text-sm text-muted-foreground md:text-lg">
          Good to see you again, Let&apos;s get productive 🚀
        </span>
      </div>

      <Button
        className="py-6 mt-6"
        size="lg"
        onClick={() => onOpen("create-workspace-home")}
      >
        Create Workspace
      </Button>

      <CreateWorkspace
        mode="NEW"
        isOpen={isOpen && openFor === "create-workspace-home"}
        onClose={onClose}
      />
    </div>
  );
};
export default HomeComponent;
