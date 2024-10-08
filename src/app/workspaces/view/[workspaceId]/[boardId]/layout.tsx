import { ReactNode } from "react";
import BoardSidebar from "./_components/board-sidebar";

const BoardIdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-16 px-2 w-full">
      <BoardSidebar />
      {children}
    </div>
  );
};
export default BoardIdLayout;
