import { ReactNode } from "react";
import Sidebar from "../_components/sidebar";

const MainHomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-16 md:pt-20 max-w-7xl 2xl:max-w-screen-2xl mx-auto h-screen">
      <div className="flex gap-x-7 h-full">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />

          {/* <WorkSpaceList /> */}
        </div>
        {children}
      </div>
    </div>
  );
};
export default MainHomeLayout;
