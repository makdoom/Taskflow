import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Workspace } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { FiLayout, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const routes = [
  {
    id: "1",
    name: "Boards",
    icon: <FiLayout className="size-4 mr-2" />,
    href: "/workspaces/1/boards",
  },
  {
    id: "2",
    name: "Members",
    icon: <FiUsers className="size-4 mr-2" />,
    href: "/workspaces/2/members",
  },
  {
    id: "3",
    name: "Settings",
    icon: <IoSettingsOutline className="size-4 mr-2" />,
    href: "/workspaces/3/settings",
  },
];

type WorkspaceItemProp = {
  isExpanded: boolean;
  workspace: Workspace;
  onExpand: (id: string) => void;
};

const WorkspaceNavItem = ({
  isExpanded,
  workspace,
  onExpand,
}: WorkspaceItemProp) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={workspace.id} className="border-none mb-3">
      <AccordionTrigger
        onClick={() => onExpand(workspace.id)}
        className={cn(
          "flex items-center p-1.5 gap-x-2 rounded-md transition text-start no-underline hover:no-underline hover:bg-secondary"
        )}
      >
        <div className="flex items-center gap-x-3">
          <Avatar className="size-8 rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span
            className={cn(
              "text-muted-foreground",
              isExpanded && "text-primary"
            )}
          >
            {workspace.name}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col space-y-1 pt-2">
        {routes.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={cn(
              "text-start font-normal justify-start mx-4 text-muted-foreground",
              pathname.toLowerCase().includes(item.name.toLowerCase()) &&
                "bg-secondary text-primary"
            )}
            onClick={() => handleNavigate(item.href)}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
export default WorkspaceNavItem;
