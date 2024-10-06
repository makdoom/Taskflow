"use client";

import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";

const HomeItem = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigateToHome = () => router.push("/workspaces");

  return (
    <div
      onClick={handleNavigateToHome}
      className={cn(
        "flex items-center gap-x-2 cursor-pointer hover:bg-secondary p-2 rounded-md",
        pathname === "/workspaces" && "bg-secondary"
      )}
    >
      <FiHome className="size-4" />
      <span className="text-sm font-medium">Home</span>
    </div>
  );
};
export default HomeItem;
