import { ConnectKitButton } from "connectkit";
import type { NextPage } from "next";
import Link from "next/link";

import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { DiscordIcon } from "../icons/DiscordIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { JuiceboxGraphProvider } from "../juicebox/JuiceboxGraphProvider";
import { NftRewardsSection } from "../juicebox/NftRewardsSection";
import { ProjectCard } from "../ProjectCard";
import { SectionHeading } from "../SectionHeading";
import { SnapshotGraphProvider } from "../snapshot/SnapshotGraphProvider";
import { SnapshotSection } from "../snapshot/SnapshotSection";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Container className="flex flex-col relative py-8">
        <div className="flex flex-row items-center gap-6">
          <div className="flex-grow flex flex-col md:flex-row md:items-center gap-2">
            <Link href="/">
              <a className="flex-shrink-0 p-4 -m-4">
                <img src="/logo.svg" className="w-48" alt="StudioDAO logo" />
              </a>
            </Link>
            <nav className="flex-grow hidden md:flex items-center justify-center -m-4">
              <a
                className="inline-flex px-4 py-2 hover:text-white hover:underline hover:underline-offset-2"
                href="#box-office"
              >
                Box Office
              </a>
              <a
                className="inline-flex px-4 py-2 hover:text-white hover:underline hover:underline-offset-2"
                href="#faq"
              >
                FAQ
              </a>
              <a
                className="inline-flex px-4 py-2 hover:text-white hover:underline hover:underline-offset-2"
                href="https://twitter.com/studiodao"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                className="inline-flex px-4 py-2 hover:text-white hover:underline hover:underline-offset-2"
                href="https://discord.com/invite/YxPGn9pcdr"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Discord"
                title="Discord"
              >
                <DiscordIcon />
              </a>
            </nav>
          </div>

          <ConnectKitButton />
        </div>
      </Container>

      <div className="space-y-32 sm:space-y-48">
        <div className="relative">
          <img
            className="absolute w-full h-full object-cover"
            src="/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/70 to-zinc-900 md:from-transparent md:to-zinc-900" />

          <div className="relative md:min-h-[480px] lg:min-h-[640px] flex flex-col">
            <div className="bg-zinc-800/90">
              <Container>
                <div className="flex justify-between py-4">
                  <div>Current treasury cycle</div>
                  <div className="hidden sm:block">Earn Green-light Power</div>
                </div>
              </Container>
            </div>
            <div className="flex-grow flex flex-col justify-end items-center">
              <Container>
                <div className="flex flex-col md:flex-row md:justify-center md:items-end gap-12 md:gap-24 py-12 -mb-16">
                  <div className="space-y-4">
                    <h1 className="text-6xl font-dmserif text-white">
                      Be the{" "}
                      <span className="text-emerald-500">Green-light</span>!
                    </h1>
                    <p>
                      Welcome to StudioDAO, a movie studio owned by filmmakers
                      and fans. Members purchase Super Tickets and vote on which
                      movies receive weekly community grants. Grow your
                      Green-light power by contributing to the community.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <ul>
                      <li className="flex gap-2">
                        <span>❇️</span> Green-light films
                      </li>
                      <li className="flex gap-2">
                        <span>🎥</span> Make movies
                      </li>
                      <li className="flex gap-2">
                        <span>🍿</span> Watch movies
                      </li>
                    </ul>
                    <div className="flex gap-2 w-max">
                      <ButtonLink
                        href={"https://docs.studiodao.xyz/studiodao-explainer/"}
                        variant="secondary"
                        target={"_blank"}
                      >
                        Learn more
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>

        <SnapshotGraphProvider>
          <SnapshotSection />
        </SnapshotGraphProvider>

        <JuiceboxGraphProvider>
          <NftRewardsSection />
        </JuiceboxGraphProvider>

        <Container id="box-office" className="space-y-16">
          <SectionHeading
            title="StudioDAO Box Office"
            description={
              <p>
                You buy a ticket for a movie that’s already been made. You buy a
                Super Ticket to see a movie get made.{" "}
                <a
                  href="https://docs.studiodao.xyz/studiodao-explainer/season-1/studio-or-dao"
                  className="text-emerald-500 hover:underline hover:underline-offset-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Learn more &rarr;
                </a>
              </p>
            }
          />
          <div className="space-y-8 sm:space-y-12">
            <ProjectCard
              title="Hyperspace Banny"
              subtitle="Bananas on a mission to make the juice flow…"
              description={
                <p>
                  Where did Banny come from? Why are they here? This important
                  documentary examines the competing origin stories of Banny and
                  reconciles them into a universal theory of Bannyness.
                </p>
              }
              imageUrl="/projects/hyperspace-banny.png"
              contributeUrl="https://goerli.juicebox.money/v2/p/38"
              learnMoreUrl="https://www.studiodao.xyz/hyperspace-banny"
            />
            <ProjectCard
              title="Stag Party"
              subtitle="When the Billionaires are away, the Deer will play…"
              description={
                <p>
                  When Buck, a young stag, gets engaged to Jane Doe, his deer
                  friends throw him a wild party on the lawn of a mansion on
                  Further Lane in East Hampton. But when Buck&apos;s Stag party
                  gets out of control, he and his friends stampede through the
                  Hamptons in a bacchanalian frenzy, and get totally lost on
                  Long Island. As they try to find their way back home, they
                  must outsmart hunters and cover their tracks, or risk the
                  herd’s winter way of life being discovered by humans. A
                  comedic horror film take down of the Hamptons…
                </p>
              }
              imageUrl="/projects/stag-party.jpg"
              contributeUrl="https://goerli.juicebox.money/v2/p/47"
              learnMoreUrl="https://www.studiodao.xyz/stag-party"
            />
            <ProjectCard
              title="Beam-Eyed Colossi"
              subtitle="Fking the city up with gratitude!"
              description={
                <>
                  <p>
                    In Summer of 2022, official reasons given by the City of Los
                    Angeles for on-and-off closures of the 6th Street Bridge in
                    downtown LA cited “vandalism, reckless driving and other
                    criminal activity.” It is commonly understood that the real
                    reason for the intermittent closures was the unprecedented
                    double-appearance of the Beam-Eyed Colossus of Excellent
                    Connectivity. This was the first and only recorded case of a
                    Colossus appearing twice at the same location, which
                    prompted officials to close the structure and install a
                    collection of cameras and sensors to gather data in the
                    event of a third appearance, which never occurred.
                  </p>
                  <p>
                    Compelling anecdotal reports by local residents described a
                    marked increase in upload and download speeds during both
                    appearances. Skeptics have repeatedly suggested that these
                    could have simply been random jumps in connection speeds,
                    but area residents dismissed this notion as extremely
                    unlikely, since the internet provider in the area is
                    Spectrum.
                  </p>
                </>
              }
              imageUrl="/projects/beam-eyed-colossi.gif"
              contributeUrl="https://goerli.juicebox.money/v2/p/59"
              learnMoreUrl="https://www.studiodao.xyz/beam-eyed-colossi"
            />
          </div>
        </Container>

        <Container id="faq" className="space-y-12">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                How do I join StudioDAO?
              </h4>
              <p>
                Simple, just buy a Super Ticket. All Super Ticket minters
                receive StudioDAO Membership.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                What is a Super Ticket?
              </h4>
              <p>
                Super Tickets help fund films. Super Tickets grant access to
                content and experiences during production. Check out the Super
                Tickets currently on sale in the Box Office.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                What is StudioDAO U.N.A?
              </h4>
              <p>
                StudioDAO U.N.A. is an Unincorporated Nonprofit Association.
                When you buy a Super Ticket you receive a single
                non-transferable membership in StudioDAO U.N.A. You can sell or
                transfer your Super Ticket, but your membership in StudioDAO
                U.N.A. is non-transferable.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                Do Super Tickets have utility?
              </h4>
              <p>
                You betcha! Super Tickets grant access to content and
                experiences customized for each film. Examples include StudioDAO
                Green-light Power, exclusive NFT mints, film credit, premiere
                invites, behind-the-scenes events, and our favorite, custom
                designed movie specific ice cream flavors with Studio super pal,
                Nicholas Morgenstern.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <ButtonLink
              size="sm"
              href={"https://docs.studiodao.xyz/faq"}
              target={"_blank"}
              className="mx-auto"
            >
              Learn more
            </ButtonLink>
          </div>
        </Container>

        <div className="flex flex-col gap-6 items-center justify-center divide-y divide-zinc-700">
          <a href="#">
            <img src="/logo.svg" className="w-36" alt="StudioDAO logo" />
          </a>
          <nav className="flex">
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
              href="#box-office"
            >
              Box Office
            </a>
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
              href="#faq"
            >
              FAQ
            </a>
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
              href="https://twitter.com/studiodao"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
              href="https://discord.com/invite/YxPGn9pcdr"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
          </nav>
        </div>
      </div>
      <div className="px-6 py-4 mt-16 flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-between text-zinc-600">
        <a
          href="https://juicebox.money/"
          className="hover:underline hover:underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Runs with Juicebox, secured by Ethereum
        </a>
        <div className="flex flex-col md:flex-row gap-x-6">
          <span>© 2022 StudioDAO Backlot, LLC.</span>
          <a
            href="https://www.studiodao.xyz/privacy-policy"
            className="hover:underline hover:underline-offset-2"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.studiodao.xyz/terms-of-use"
            className="hover:underline hover:underline-offset-2"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
