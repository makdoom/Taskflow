import { getWorkspaceList } from "@/actions/workspace";
import HomeItem from "./home-item";
import WorkspaceList from "./workspace-list";
import { Workspace } from "@prisma/client";

const Sidebar = async () => {
  let workspaceList: Workspace[];
  console.log("Rendering Sidebar component");
  try {
    const response = await getWorkspaceList();
    workspaceList = response.data as Workspace[];
  } catch (error) {
    console.error("Failed to fetch workspaces:", error);
    workspaceList = [];
  }
  return (
    <div className="flex flex-col">
      <HomeItem />

      <WorkspaceList workspaces={workspaceList} />
    </div>
  );
};
export default Sidebar;
