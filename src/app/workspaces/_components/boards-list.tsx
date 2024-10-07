import { FiLayout } from "react-icons/fi";
import { getBoardsList } from "@/actions/board";
import { Board } from "@prisma/client";
import BoardItemCard from "./board-item-card";

const BoardsList = async () => {
  const result = await getBoardsList();
  const data = result.data as Board[];

  console.log(result.data);
  return (
    <div className="mt-4">
      <div className="flex items-center gap-x-2 font-semibold">
        <FiLayout />
        <p>Your Boards</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
        {data?.map((board) => (
          <BoardItemCard key={board.id} type="redirect" board={board} />
        ))}
        <BoardItemCard type="new" />
      </div>
    </div>
  );
};
export default BoardsList;
