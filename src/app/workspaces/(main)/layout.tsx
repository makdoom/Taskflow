import { ReactNode } from "react";

const MainHomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-x-8">
      <p>Sidebar</p>
      {children}
    </div>
  );
};
export default MainHomeLayout;
