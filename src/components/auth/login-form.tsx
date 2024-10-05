"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CardWrapper from "@/components/wrapper/card-wrapper";
import { LoginSchema, LoginSchemaType } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { handleCredentialLogin } from "@/actions/auth/login";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import ErrorCard from "../ErrorCard";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [globalError, setGlobalError] = useState("");

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isSubmitting } = form.formState;

  const submitHandler = async (data: LoginSchemaType) => {
    try {
      const result = await handleCredentialLogin(data);
      if (!result) return;
      const { success, message, type } = result;
      if (success && type === "email-verification") return toast.info(message);

      if (!success) {
        setGlobalError("");
        return toast.error(message);
      }
    } catch (error) {
      console.log("An unexpected error occured", error);
      toast.error("An unexpected error occured while login, please try again");
    }
  };

  useEffect(() => {
    if (searchParams.get("error") === "OAuthAccountNotLinked") {
      setGlobalError("Email address already in use with different provider.");
    }
  }, [searchParams]);

  return (
    <CardWrapper
      heading="Login Now"
      subHeading="Your tasks, your flow, one login away"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      {globalError && <ErrorCard message={globalError} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@gmail.com"
                      type="email"
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full !mt-8" size="lg" type="submit">
            {isSubmitting && <FiLoader className="animate-spin size-5 mr-2" />}
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default LoginForm;
