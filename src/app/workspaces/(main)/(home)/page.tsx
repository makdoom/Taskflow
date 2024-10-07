"use client";

import { Button } from "@/components/ui/button";
import CreateWorkspace from "@/app/workspaces/_components/create-workspace";
import { useCreateWorkspace } from "@/hooks/use-create-workspace";

const HomeComponent = () => {
  const { isOpen, onOpen, onClose } = useCreateWorkspace((state) => state);

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

      <Button className="py-6 mt-6" size="lg" onClick={onOpen}>
        Create Workspace
      </Button>

      <CreateWorkspace isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
export default HomeComponent;
