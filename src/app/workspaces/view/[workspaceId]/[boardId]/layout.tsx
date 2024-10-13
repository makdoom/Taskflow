import { ReactNode } from "react";
import BoardSidebar from "./_components/board-sidebar";

type BoardIdLayoutPropType = {
  children: ReactNode;
  params: {
    workspaceId: string;
    boardId: string;
  };
};

const BoardIdLayout = ({ children, params }: BoardIdLayoutPropType) => {
  return (
    <div className="pt-12 w-full flex gap-x-3 h-[calc(100vh-0px)]">
      <BoardSidebar params={params} />
      {children}
    </div>
  );
};
export default BoardIdLayout;
