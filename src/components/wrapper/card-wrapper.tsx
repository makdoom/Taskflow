"use client ";

import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import WrapperHeader from "./wrapper-header";
import Social from "./social";
import BackButton from "./back-button";

type CardWrapperPropTypes = {
  children?: ReactNode;
  heading: string;
  subHeading: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

const CardWrapper = ({
  children,
  heading,
  subHeading,
  showSocial,
  backButtonLabel,
  backButtonHref,
}: CardWrapperPropTypes) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <WrapperHeader heading={heading} subHeading={subHeading} />
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
export default CardWrapper;
