"use client";

import Link from "next/link";
import { Button } from "../ui/button";

type BackButtonPropType = {
  label: string;
  href: string;
};

const BackButton = ({ label, href }: BackButtonPropType) => {
  return (
    <Button variant="link" asChild className="w-full">
      <Link href={href} className="font-sans">
        {label}
      </Link>
    </Button>
  );
};
export default BackButton;
