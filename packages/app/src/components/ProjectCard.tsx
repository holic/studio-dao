import { juiceboxUrl } from "../constants";
import { Project } from "../projects/types";
import { ButtonLink } from "./Button";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const imageUrl = project.nfts[2].imageURL;
  const contributeUrl = `${juiceboxUrl}/v2/p/${project.juiceboxProjectId}`;
  const learnMoreUrl = `/projects/${project.slug}`;
  return (
    <>
      <div className="flex flex-col md:flex-row bg-black/30 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          className="flex-shrink-0 md:w-72 lg:w-96 h-56 md:h-auto aspect-square object-cover"
        />
        <div className="flex-grow flex flex-col justify-between p-8 md:p-12 gap-8">
          <div className="space-y-4">
            <p>
              <h5 className="font-dmserif text-xl text-white">
                {project.projectCard.intro}
              </h5>
            </p>
            <p>
              <h5 className="font-dmserif text-3xl text-white">
                {project.name}
              </h5>
            </p>
            {project.projectCard.description.map((text, i) => (
              <p key={project.slug + i}>{text}</p>
            ))}
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
    </>
  );
};
