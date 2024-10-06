import Logo from "@/components/logo";
import { IoNotificationsOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import UserMenu from "./user-menu";
import MobileSidebar from "@/components/mobile-sidebar";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full border-b bg-background h-12 shadow-sm flex items-center ">
      <div className="flex items-center gap-x-4 justify-between w-full px-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <div className="block md:hidden">
          <MobileSidebar />
        </div>

        <div className="flex gap-x-3">
          <ThemeToggle />
          <Button variant="outline" className="rounded-full size-8 p-0">
            <IoNotificationsOutline className="size-4" />
          </Button>

          <UserMenu />
        </div>
      </div>
    </div>
  );
};
export default Header;
