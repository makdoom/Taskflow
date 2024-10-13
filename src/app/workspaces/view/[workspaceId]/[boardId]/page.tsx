import { getBoard } from "@/actions/board";
import BoardClient from "./_components/board-client";
import { Board } from "@prisma/client";

type BoardIdPagePropType = {
  params: {
    workspaceId: string;
    boardId: string;
  };
};
const BoardIdPage = async ({ params }: BoardIdPagePropType) => {
  const result = await getBoard(params.boardId);
  const data = result.data as Board;

  console.log(data);
  return <BoardClient boardInfo={data} />;
};
export default BoardIdPage;
