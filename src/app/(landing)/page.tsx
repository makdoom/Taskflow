import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <BackgroundBeamsWithCollision className="!h-screen flex flex-col px-2">
        <h2 className="text-2xl sm:text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="lg:text-6xl">
                Organize. Prioritize. Succeed.
              </span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="lg:text-6xl">
                Organize. Prioritize. Succeed.
              </span>
            </div>
          </div>
        </h2>
        <p className="text-md sm:md-lg md:text-2xl text-center mt-3 text-secondary-foreground">
          Project management tool designed to streamline task organization,{" "}
          <br className="hidden md:block" /> enhance team collaboration, and
          boost productivity
        </p>

        <div className="space-x-4">
          <Button size="lg" className="mt-16 py-6">
            <Link href="/auth/login">Get Started</Link>
          </Button>

          <Button variant="outline" size="lg" className="mt-16 py-6">
            <Link
              className="flex items-center gap-2"
              href="https://www.github.com/makdoom/taskflow"
              target="_blank"
            >
              Github
              <FaGithub className="size-5" />
            </Link>
          </Button>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};
export default LandingPage;
