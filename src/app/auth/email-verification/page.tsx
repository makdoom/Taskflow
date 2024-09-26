"use client";

import CardWrapper from "@/components/wrapper/card-wrapper";
import { useSearchParams } from "next/navigation";
import { FiLoader } from "react-icons/fi";

const EmailVerificationPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

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
      {token && <FiLoader className="mx-auto h-8 w-8 animate-spin" />}
    </CardWrapper>
  );
};
export default EmailVerificationPage;
