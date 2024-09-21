"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full flex items-center gap-2"
        variant="secondary"
        //   onClick={() => onClickHandler("google")}
      >
        <FcGoogle className="h-5 w-5" />
        <p>Google</p>
      </Button>
      <Button
        size="lg"
        className="w-full flex items-center gap-2"
        variant="secondary"
        //   onClick={() => onClickHandler("github")}
      >
        <FaGithub className="h-5 w-5" />
        <p>Github</p>
      </Button>
    </div>
  );
};
export default Social;
