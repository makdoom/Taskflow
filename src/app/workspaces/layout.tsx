import { ReactNode } from "react";

const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
};
export default WorkspaceLayout;
