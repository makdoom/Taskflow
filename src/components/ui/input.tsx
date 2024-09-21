import * as React from "react";

import { cn } from "@/lib/utils";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    return (
      <div
        className={cn(
          "group relative w-full flex items-center gap-2",
          type === "password"
            ? "border rounded-md pr-2 transition-colors focus-within:border-primary"
            : "border-0"
        )}
      >
        <input
          type={showPassword ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
            type === "password" &&
              "border-0 focus-visible:outline-none focus-visible:ring-0"
          )}
          ref={ref}
          {...props}
        />
        {type === "password" &&
          (showPassword ? (
            <IoEyeOutline
              className="cursor-pointer size-5"
              onClick={togglePassword}
            />
          ) : (
            <IoEyeOffOutline
              className="cursor-pointer size-5"
              onClick={togglePassword}
            />
          ))}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
