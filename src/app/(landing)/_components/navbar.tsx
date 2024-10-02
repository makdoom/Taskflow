import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { RiMenu5Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full px-4 border-b flex items-center justify-between z-10 h-14">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />
        <div className="hidden space-x-3 w-full md:flex md:w-auto md:items-center">
          <ThemeToggle />
          <Button variant="outline">
            <Link href="/auth/register">Signup</Link>
          </Button>
          <Button>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger className="md:hidden">
            <RiMenu5Line className="size-6 block md:hidden cursor-pointer" />
          </DrawerTrigger>
          <DrawerContent className="px-4 space-y-8 pb-4">
            <DrawerTitle className="text-lg text-center text-muted-foreground">
              Login/Signup to continue
            </DrawerTitle>
            <DrawerDescription className="hidden" />
            <div className="flex flex-col w-full space-y-4">
              <Button variant="secondary">Signup</Button>
              <Button>Login</Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
export default Navbar;
