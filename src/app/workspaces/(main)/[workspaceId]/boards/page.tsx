import BoardsList from "@/app/workspaces/_components/boards-list";
import WorkspaceInfo from "@/app/workspaces/_components/workspace-info";

interface BoardsProps {
  params: { workspaceId: string }; // `params` contains the dynamic segment
}

const Boards = ({ params }: BoardsProps) => {
  return (
    <div className="flex-1 p-2">
      <WorkspaceInfo />

      <BoardsList workspaceId={params.workspaceId} />
    </div>
  );
};
export default Boards;
