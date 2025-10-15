// type InputProps = {
//   value?: string;
//   placeholder?: string;
// };

import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "px-3 py-1.5 outline-none border rounded-md border-gray-200",
        className
      )}
      {...props}
    />
  );
}
