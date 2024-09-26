"use client";

import { emailVerification } from "@/actions/authActions/emailVerification";
import CardWrapper from "@/components/wrapper/card-wrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";

const EmailVerificationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  // const token = searchParams.get("token");
  const [error, setError] = useState("");

  const onSubmit = useCallback(
    async (token: string) => {
      console.log("inside submit handler");
      if (!token || isEmailVerified) return;

      try {
        const response = await emailVerification(token);
        const { success, message } = response;
        if (!success) return setError(message);

        setIsEmailVerified(true);
        toast.success("Email verified successfully");
        router.push("/auth/login");
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong whie verifying email");
        }
      }
    },
    [router, isEmailVerified]
  );

  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken && !token) {
      console.log("calling");
      setToken(urlToken);
      onSubmit(urlToken);
    }
  }, []);

  return (
    <CardWrapper
      heading={token ? "Verifying Email ⚙️" : "Email Verification 📧"}
      subHeading={
        token
          ? "Please wait while we verify your email address"
          : "Email verification link sent to your email, Please verify"
      }
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      {error ? (
        <p className="text-destructive bg-red-100 rounded-md text-sm p-2 px-4">
          {error}
        </p>
      ) : (
        token && <FiLoader className="mx-auto h-8 w-8 animate-spin" />
      )}
    </CardWrapper>
  );
};
export default EmailVerificationPage;
