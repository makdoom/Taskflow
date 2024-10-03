import { ReactNode } from "react";
import Header from "./_components/header";

const WorkspacesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <Header />
      {children}
    </div>
  );
};
export default WorkspacesLayout;
