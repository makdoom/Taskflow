import { ReactNode } from "react";
import Sidebar from "../_components/sidebar";

const MainHomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-16 md:pt-20 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar storageKey="t-sidebar-state" />
        </div>
        {children}
      </div>
    </div>
  );
};
export default MainHomeLayout;
