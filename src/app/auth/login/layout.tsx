import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-500 via-pink-600 to-fuchsia-700">
      {children}
    </div>
  );
};
export default AuthLayout;
