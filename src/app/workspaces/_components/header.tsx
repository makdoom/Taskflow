import Logo from "@/components/logo";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <div className="bg-white fixed top-0 z-50 w-full border-b h-14 shadow-sm flex items-center">
      <div className="flex items-center gap-x-4 justify-between w-full px-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <UserMenu />
      </div>
    </div>
  );
};
export default Header;
