import { handleLogout } from "@/actions/authActions/logout";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

const Workspaces = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form action={handleLogout}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
};
export default Workspaces;
