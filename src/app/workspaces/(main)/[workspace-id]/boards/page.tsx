import BoardsList from "@/app/workspaces/_components/boards-list";
import WorkspaceInfo from "@/app/workspaces/_components/workspace-info";

const Boards = () => {
  return (
    <div className="flex-1 p-2">
      <WorkspaceInfo />

      <BoardsList />
    </div>
  );
};
export default Boards;
