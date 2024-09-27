import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiActivity } from "react-icons/fi";
import { MdOutlineWorkspaces } from "react-icons/md";
import { CgDarkMode, CgShortcut } from "react-icons/cg";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] mr-2">
        <div className="flex items-center gap-x-2 p-2">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <p className="text-sm font-semibold">Makdoom Shaikh</p>
            <span className="text-xs text-muted-foreground">
              makshaikh99@gmail.com
            </span>
          </div>
        </div>
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          Manage Account
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          <MdOutlineWorkspaces className="size-4" />
          Create Workspace
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          <FiActivity className="size-4" />
          Activity
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          <CgDarkMode className="size-4" />
          Darkmode
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          <IoSettingsOutline className="size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          <IoIosHelpCircleOutline className="size-4" />
          Help
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2 cursor-pointer">
          <CgShortcut className="size-4" />
          Shortcut
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-x-2 cursor-pointer text-destructive hover:!text-destructive">
          <IoLogOutOutline className="size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserMenu;
