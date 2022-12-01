import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: ReactNode;
};

export const SectionHeading = ({ title, description }: Props) => {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h2 className="text-4xl text-center font-dmserif text-white">{title}</h2>
      {description ? (
        <div className="max-w-prose mx-auto space-y-3">{description}</div>
      ) : null}
    </div>
  );
};
