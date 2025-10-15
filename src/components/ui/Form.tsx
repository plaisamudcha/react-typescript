// type FormProps = {
//   children: React.ReactNode;
// };

import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type FormProps = ComponentProps<"form"> & {
  children: React.ReactNode;
};

export default function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={cn(
        "flex flex-col gap-2 bg-white rounded-lg p-4 shadow",
        className
      )}
      {...props}
    >
      {children}
    </form>
  );
}
