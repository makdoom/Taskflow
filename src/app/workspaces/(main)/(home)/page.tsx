import { Button } from "@/components/ui/button";

const HomeComponent = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col space-y-10">
      <div className="flex flex-col space-y-2 items-center">
        <h1 className="text-3xl font-semibold">
          Welcome back Makdoom Shaikh 👋 !!
        </h1>
        <span className="text-muted-foreground text-lg">
          Good to see you again, Let&apos;s get productive 🚀
        </span>
      </div>

      <Button className="py-6 mt-6" size="lg">
        Create Workspace
      </Button>
    </div>
  );
};
export default HomeComponent;
