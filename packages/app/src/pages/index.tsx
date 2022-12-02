import { ConnectKitButton } from "connectkit";
import type { NextPage } from "next";
import Link from "next/link";

import { ButtonLink } from "../Button";
import { juiceboxTreasuryIds, juiceboxUrl } from "../constants";
import { Container } from "../Container";
import { DiscordIcon } from "../icons/DiscordIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { GreenlightPower } from "../juicebox/GreenlightPower";
import { JuiceboxGraphProvider } from "../juicebox/JuiceboxGraphProvider";
import { NftRewardsSection } from "../juicebox/NftRewardsSection";
import { TreasuryBalance } from "../juicebox/TreasuryBalance";
import { Meta } from "../Meta";
import { ProjectCard } from "../ProjectCard";
import { SectionHeading } from "../SectionHeading";
import { SnapshotGraphProvider } from "../snapshot/SnapshotGraphProvider";
import { SnapshotSection } from "../snapshot/SnapshotSection";

const HomePage: NextPage = () => {
  return (
    <>
      <Meta />
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
                {/* <a
                className="inline-flex px-4 py-2 hover:text-white hover:underline"
                href="#box-office"
              >
                Box Office
              </a> */}
                <a
                  className="inline-flex px-4 py-2 hover:text-white hover:underline"
                  href="#faq"
                >
                  FAQ
                </a>
                <a
                  className="inline-flex px-4 py-2 hover:text-white hover:underline"
                  href="https://twitter.com/studiodao"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-flex px-4 py-2 hover:text-white hover:underline"
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
              src="/hero.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/70 to-zinc-900 md:from-transparent md:to-zinc-900" />

            <div className="relative md:min-h-[480px] lg:min-h-[640px] flex flex-col">
              <div className="bg-zinc-800/90">
                <Container>
                  <div className="flex justify-between py-4">
                    <div>
                      <JuiceboxGraphProvider>
                        <TreasuryBalance />
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
                    <div className="space-y-4 w-7/12">
                      <h1 className="text-6xl font-dmserif text-white">
                        Be the{" "}
                        <span className="text-emerald-500">Greenlight</span>!
                      </h1>
                      <p>
                        Welcome to StudioDAO, a movie studio owned by filmmakers
                        and fans. Members purchase Super Tickets and vote on
                        which movies receive weekly community grants. Grow your
                        Greenlight Power by contributing to the community.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <ul>
                        <li className="flex gap-2">
                          <span>❇️</span> Greenlight movies
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
                          href={`${juiceboxUrl}/v2/p/${juiceboxTreasuryIds[0]}`}
                          target="_blank"
                        >
                          Join StudioDAO
                        </ButtonLink>
                        <ButtonLink
                          href="https://docs.studiodao.xyz/studiodao-explainer/"
                          variant="secondary"
                          target="_blank"
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
                <>
                  <p>
                    When you buy your first Super Ticket you become a member of
                    StudioDAO.
                  </p>
                  <p>
                    Super Tickets help fund films. Super Tickets grant access to
                    content and experiences customized for each film, including
                    exclusive NFT mints, film credit, events, exclusive merch
                    and StudioDAO Greenlight Power.
                  </p>
                  <p>
                    <a
                      href="https://docs.studiodao.xyz/studiodao-explainer/season-1/studio-or-dao"
                      className="text-emerald-500 hover:underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Learn more &rarr;
                    </a>
                  </p>
                </>
              }
            />
            <div className="space-y-8 sm:space-y-12">
              <ProjectCard
                title="Alien too Me"
                subtitle="an intergalactic odyssey of action,
                adventure, and pyramid scheme cosmetics sales"
                description={
                  <p>
                    Discover a new universe with ALIEN TO ME. An animated comedy
                    series from comedian, Connor Kerrigan, and the producers of
                    Netflix’s WENDELL & WILD. Join a struggling alien named
                    Krill, on an intergalactic odyssey of action, adventure, and
                    pyramid scheme cosmetics sales – all in the name of love...
                    or at the very least getting pregnant.
                  </p>
                }
                imageUrl="/images/alien-to-me/nfts/taalos.gif"
                contributeUrl="https://goerli.juicebox.money/v2/p/124"
                learnMoreUrl="/projects/alien-to-me"
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
                  Simple, just buy a{" "}
                  <a
                    href={`${juiceboxUrl}/v2/p/${juiceboxTreasuryIds[0]}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Super Ticket.
                  </a>{" "}
                  All Super Ticket minters receive StudioDAO Membership.
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
                  <a
                    href="https://docs.studiodao.xyz/studiodao-explainer/studio-or-dao-governance/studio-governance"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    StudioDAO U.N.A.
                  </a>{" "}
                  is an Unincorporated Nonprofit Association. When you buy a
                  Super Ticket you receive a single non-transferable membership
                  in StudioDAO U.N.A. You can sell or transfer your Super
                  Ticket, but your membership in StudioDAO U.N.A. is
                  non-transferable.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-white">
                  Do Super Tickets have utility?
                </h4>
                <p>
                  You betcha! Super Tickets grant access to content and
                  experiences customized for each film. Examples include
                  StudioDAO Greenlight Power, exclusive NFT mints, film credit,
                  premiere invites, behind-the-scenes events, and our favorite,
                  custom designed movie specific ice cream flavors with Studio
                  super pal, Nicholas Morgenstern.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-white">
                  What does Greenlighting a film mean?
                </h4>
                <p>
                  Greenlighting is funding a movie. There are two ways to
                  Greenlight a film on StudioDAO. You can support films directly
                  by purchasing Super Tickets at the Box Office. Then you can
                  vote on which film will receive a grant from the weekly
                  Greenlight Vote.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-white">
                  How do I get Greenlight Power?
                </h4>
                <p>
                  When you support a film, in addition to your Super Ticket, you
                  also receive Greenlight Power. If you want to maximize your
                  Greenlight Power you can buy Greenlight Power directly from
                  the StudioDAO U.N.A. Juicebox. The issuance rate of Greenlight
                  Power is adjustable to incentivize community formation.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonLink
                size="sm"
                variant="secondary"
                href="https://docs.studiodao.xyz/studiodao-explainer/season-1/faq"
                target="_blank"
                className="mx-auto"
              >
                Learn more
              </ButtonLink>
            </div>
          </Container>

          <div className="flex flex-col gap-6 items-center justify-center divide-y divide-zinc-700">
            <Link href="/">
              <a>
                <img src="/logo.svg" className="w-36" alt="StudioDAO logo" />
              </a>
            </Link>
            <nav className="flex">
              {/* <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline"
              href="#box-office"
            >
              Box Office
            </a> */}
              <a
                className="inline-flex px-4 sm:px-6 py-4 hover:underline"
                href="#faq"
              >
                FAQ
              </a>
              <a
                className="inline-flex px-4 sm:px-6 py-4 hover:underline"
                href="https://twitter.com/studiodao"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <a
                className="inline-flex px-4 sm:px-6 py-4 hover:underline"
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
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Runs with Juicebox, secured by Ethereum
          </a>
          <div className="flex flex-col md:flex-row gap-x-6">
            <span>© 2022 StudioDAO Backlot, LLC.</span>
            <a
              href="https://studio-dao.webflow.io/privacy-policy"
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://studio-dao.webflow.io/terms-of-use"
              className="hover:underline"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
