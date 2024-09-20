import { ReactNode } from "react";
import Navbar from "./_components/navbar";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      {/* <Navbar goes here*/}
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default LandingLayout;
