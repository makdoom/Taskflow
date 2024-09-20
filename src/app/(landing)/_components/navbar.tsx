import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white p-3 px-4 border-b felx items-center z-10">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between ">
        <h1 className="text-xl font-bold tracking-wide">Taskflow</h1>
        <div className="space-x-4 flex items-center justify-between w-full md:block md:w-auto">
          <Button variant="secondary">Signup</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
