import { ReactNode } from "react";

import { NFTPerks } from "../projects/types";
import { ButtonLink } from "./Button";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  description: ReactNode;
  imageUrl: string;
  contributeUrl: string;
  learnMoreUrl?: string;
  isProjectPage?: boolean;
  perks?: NFTPerks;
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  contributeUrl,
  learnMoreUrl,
  perks,
}: Props) => (
  <>
    <div className="flex flex-col md:flex-row bg-black/30 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        className="flex-shrink-0 md:w-72 lg:w-96 h-56 md:h-auto aspect-square object-cover"
      />
      <div className="flex-grow flex flex-col justify-between p-8 md:px-12 gap-8">
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
            variant="primaryProject"
          >
            Buy NFT
          </ButtonLink>
          {learnMoreUrl ? (
            <ButtonLink size="sm" variant="secondary" href={learnMoreUrl}>
              Learn more
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
    {perks ? (
      <div className="relative">
        <div className="p-6 w-xl mx-auto bg-zinc-800 rounded-xl border border-zinc-400 min-w-sm">
          <p>{perks.title}</p>
          <ul className="list-disc px-6">
            {perks.perks.map((perk, index) => (
              <li key={`${title}-perk-${index}`}>{perk}</li>
            ))}
          </ul>
        </div>
      </div>
    ) : null}
  </>
);
