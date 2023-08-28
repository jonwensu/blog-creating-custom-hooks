import { DOMAttributes } from "react";

export const Button = ({
  children,
  ...props
}: DOMAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="rounded-md bg-slate-50 p-2 text-slate-800 hover:opacity-90 active:bg-slate-300"
      {...props}
    >
      {children}
    </button>
  );
};
