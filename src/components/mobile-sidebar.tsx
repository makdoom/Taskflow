"use client";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Sidebar from "@/app/workspaces/_components/sidebar";

const MobileSidebar = () => {
  const { isOpen, onClose, onOpen } = useMobileSidebar((state) => state);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  useEffect(() => onClose(), [pathname, onClose]);

  if (!isMounted) return null;

  return (
    <div className="block md:hidden">
      <Button
        variant="outline"
        className="rounded-full size-8 p-0"
        onClick={onOpen}
      >
        <CiMenuFries className="size-4" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-14">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileSidebar;
