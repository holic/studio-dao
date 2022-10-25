import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Container = ({ children, className, id }: Props) => {
  return (
    <div id={id} className={twMerge("max-w-5xl mx-auto px-6", className)}>
      {children}
    </div>
  );
};
