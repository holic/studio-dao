import { ReactNode } from "react";

import { ButtonLink } from "./Button";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  description: ReactNode;
  imageUrl: string;
  contributeUrl: string;
  learnMoreUrl: string;
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  contributeUrl,
  learnMoreUrl,
}: Props) => (
  <div className="flex flex-col md:flex-row bg-black/30 rounded-lg overflow-hidden">
    <img
      src={imageUrl}
      className="flex-shrink-0 md:w-72 lg:w-96 h-56 md:h-auto aspect-square object-cover"
    />
    <div className="flex-grow flex flex-col justify-between p-8 md:p-12 gap-8">
      <div className="space-y-4">
        <h5 className="font-dmserif text-3xl text-white">{title}</h5>
        {subtitle ? <p className="text-zinc-500">{subtitle}</p> : null}
        {description}
      </div>
      <div className="flex justify-between">
        <ButtonLink size="sm" href={contributeUrl} target="_blank">
          Contribute
        </ButtonLink>
        <ButtonLink
          size="sm"
          variant="secondary"
          href={learnMoreUrl}
          target="_blank"
        >
          Learn more
        </ButtonLink>
      </div>
    </div>
  </div>
);
