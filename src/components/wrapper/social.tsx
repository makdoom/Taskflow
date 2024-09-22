"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

const Social = () => {
  const socialLoginHandler = (provider: "google" | "github") => {
    signIn(provider, {
      callback: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full flex items-center gap-2"
        variant="secondary"
        onClick={() => socialLoginHandler("google")}
      >
        <FcGoogle className="h-5 w-5" />
        <p>Google</p>
      </Button>
      <Button
        size="lg"
        className="w-full flex items-center gap-2"
        variant="secondary"
        onClick={() => socialLoginHandler("github")}
      >
        <FaGithub className="h-5 w-5" />
        <p>Github</p>
      </Button>
    </div>
  );
};
export default Social;
