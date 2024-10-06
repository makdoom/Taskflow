import { FiLayout } from "react-icons/fi";

const BoardsList = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-x-2 font-semibold">
        <FiLayout />
        <p>Your Boards</p>
      </div>
    </div>
  );
};
export default BoardsList;
