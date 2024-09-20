import { ReactNode } from "react";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      {/* <Navbar goes here*/}
      <main>{children}</main>
    </div>
  );
};
export default LandingLayout;
