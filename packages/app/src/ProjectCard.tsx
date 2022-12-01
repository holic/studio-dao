import { ReactNode } from "react";

import { ButtonLink } from "./Button";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  description: ReactNode;
  imageUrl: string;
  contributeUrl: string;
  learnMoreUrl: string;
  isProjectPage?: boolean;
  perks?: ReactNode;
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  contributeUrl,
  learnMoreUrl,
  isProjectPage,
  perks,
}: Props) => (
  <>
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
          <ButtonLink
            size="sm"
            href={contributeUrl}
            target="_blank"
            variant={isProjectPage ? "primaryProject" : "primary"}
          >
            {isProjectPage ? "Buy Superticket" : "Contribute"}
          </ButtonLink>
          {isProjectPage ? null : (
            <ButtonLink
              size="sm"
              variant="secondary"
              href={learnMoreUrl}
              target="_blank"
            >
              Learn more
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
    {perks ? (
      <div className="relative">
        <div className="p-6 w-xl mx-auto bg-zinc-800 rounded-xl border border-zinc-400 min-w-sm">
          {perks}
        </div>
      </div>
    ) : null}
  </>
);
