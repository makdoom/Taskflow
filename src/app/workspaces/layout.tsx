import { ReactNode } from "react";
import Header from "./_components/header";

const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
};
export default WorkspaceLayout;
