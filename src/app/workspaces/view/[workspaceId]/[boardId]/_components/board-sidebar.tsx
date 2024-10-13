import BoardSidebarItem from "./board-sidebar-item";
import { FiPlus, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { getBoardsList } from "@/actions/board";
import { Board } from "@prisma/client";
import SidebarToggle from "./sidebar-toggle";

const routes = [
  {
    id: "1",
    name: "Add Members",
    icon: <FiUsers className="size-4 mr-2" />,
  },
  {
    id: "2",
    name: "Workspace Settings",
    icon: <IoSettingsOutline className="size-4 mr-2" />,
  },
];

type BoardSidebarPropType = {
  params: {
    workspaceId: string;
    boardId: string;
  };
};

const BoardSidebar = async ({ params }: BoardSidebarPropType) => {
  const result = await getBoardsList(params.workspaceId);
  const data = result.data as Board[];

  return (
    <SidebarToggle>
      <div className="my-4">
        {routes.map((route) => (
          <BoardSidebarItem
            key={route.id}
            workspaceId={params.workspaceId}
            name={route.name}
            icon={route.icon}
            isBoardItem={false}
          />
        ))}
      </div>

      <div className="my-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium ">Your Boards</p>
          <Button
            variant="outline"
            size="icon"
            className="size-7"
            // onClick={() => onOpen("create-workspace")}
          >
            <FiPlus className="size-3" />
          </Button>
        </div>

        <div className="my-1">
          {data.map((board) => (
            <BoardSidebarItem
              key={board.id}
              workspaceId={params.workspaceId}
              name={board.title}
              isBoardItem={true}
              board={board}
              isSelected={board.id === params.boardId}
            />
          ))}
        </div>
      </div>
    </SidebarToggle>
  );
};
export default BoardSidebar;
