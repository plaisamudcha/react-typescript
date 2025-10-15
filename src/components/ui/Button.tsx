// type ButtonProps = {
//   children: React.ReactNode;
// };

import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        `p-2 rounded-md border border-gray-200 hover:bg-gray-50 `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
