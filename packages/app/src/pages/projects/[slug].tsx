import type { NextPage } from "next";
import { useRouter } from "next/router";

import { BioCard } from "../../components/Bio";
import { ButtonLink } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Meta } from "../../components/Meta";
import { ProjectCard } from "../../components/ProjectCard";
import { SectionHeading } from "../../components/SectionHeading";
import { TimelineCard } from "../../components/TimelineCard";
import { juiceboxUrl } from "../../constants";
import { GreenlightPower } from "../../juicebox/GreenlightPower";
import { JuiceboxGraphProvider } from "../../juicebox/JuiceboxGraphProvider";
import { TreasuryBalance } from "../../juicebox/TreasuryBalance";
import { projects } from "../../projects/data";
import { Gallery } from "../../projects/types";

type GalleryProps = {
  gallery: Gallery;
};

const Gallery = ({ gallery }: GalleryProps) => (
  <Container id="gallery" className="space-y-12">
    <SectionHeading title={gallery.title} />
    <div className="max-w-prose mx-auto space-y-3">{gallery.description}</div>
    <div className="relative">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
        {gallery.imageURLs.map((imageUrl, index) => (
          <img
            key={`image-${index}`}
            src={imageUrl}
            className="   aspect-video object-cover"
          />
        ))}
      </div>
    </div>
  </Container>
);

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const slug: string = router.query.slug as string;
  const project = projects[slug];
  if (!project) {
    return (
      <>
        <div className="mt-32 p-6 max-w-sm mx-auto bg-white text-red-900 rounded-xl flex items-center space-x-4">
          <div className="shrink-0"></div>
          <div>
            <div className="text-xl font-medium">Oops</div>
            <p className=" text-black">Project not found!</p>
          </div>
        </div>
      </>
    );
  }

  const meta = {
    title: `StudioDAO - ${project.name}`,
    description: project.description,
    image: {
      url: project.imageURL,
      width: "600",
      height: "338",
    },
  };

  return (
    <>
      <Meta metadata={meta} />
      <div className="min-h-screen">
        <Header />
        <div className="space-y-32 sm:space-y-36">
          <div className="relative">
            {/* <img
              className="absolute w-full h-full object-cover"
              src="/images/alien-to-me/header.gif"
            /> */}
            <video
              className="absolute w-full h-full object-cover"
              muted
              autoPlay
              loop
            >
              <source
                src="/images/alien-to-me/background_video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/70 to-zinc-900 md:from-transparent md:to-zinc-900" />

            <div className="relative md:min-h-[480px] lg:min-h-[640px] flex flex-col">
              <div className="bg-zinc-800/90">
                <Container>
                  <div className="flex justify-between py-4">
                    <div>
                      <JuiceboxGraphProvider>
                        <TreasuryBalance
                          projectId={project.juiceboxProjectId}
                        />
                      </JuiceboxGraphProvider>
                    </div>
                    <div className="hidden sm:block">
                      <JuiceboxGraphProvider>
                        <GreenlightPower />
                      </JuiceboxGraphProvider>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <Container>
                  <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                    <div className="space-y-4">
                      <h1 className="text-6xl font-dmserif text-white">
                        {project.name}
                      </h1>
                      <p>By {project.author}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                    <div className="flex gap-2 w-max">
                      <ButtonLink
                        href={`${juiceboxUrl}/v2/p/${project.juiceboxProjectId}`}
                        target="_blank"
                        variant="primaryProject"
                      >
                        Buy NFT
                      </ButtonLink>
                      <ButtonLink
                        href={project.trailerUrl}
                        variant="secondary"
                        target="_blank"
                      >
                        Watch Trailer
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                    <p>{project.description}</p>
                  </div>
                </Container>
              </div>
            </div>
          </div>

          <Container>
            <div className="relative">
              <div className=" p-6 w-xl mx-auto bg-zinc-800 rounded-xl border border-zinc-400 min-w-sm">
                <p className="text-emerald-700 text-center text-2xl">
                  {project.cta}
                </p>
              </div>
            </div>
          </Container>

          <Container id="box-office" className="space-y-16">
            <div className="space-y-8 sm:space-y-12">
              {project.nfts.map((nft, index) => (
                <ProjectCard
                  key={`nft-${index}`}
                  title={nft.title}
                  subtitle={
                    <p>
                      {nft.edition} NFT available at{" "}
                      <span className="text-emerald-700">{nft.price} eth</span>
                    </p>
                  }
                  description={<p>{nft.description}</p>}
                  imageUrl={nft.imageURL}
                  contributeUrl={`${juiceboxUrl}/v2/p/${project.juiceboxProjectId}`}
                  perks={nft.perks}
                />
              ))}
            </div>
          </Container>

          <Container id="team" className="space-y-12">
            <SectionHeading title="About the Team" />
            {project.team.map((bio, index) => (
              <BioCard
                key={`bio-${index}`}
                name={bio.name}
                bio={bio.description}
                imageUrl={bio.imageURL}
              />
            ))}
          </Container>
          <TimelineCard
            title={`${project.timeline.title}`}
            description={project.timeline.description}
            events={project.timeline.events}
          />
          <Gallery gallery={project.gallery} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectPage;
