import { ConnectKitButton } from "connectkit";
import Link from "next/link";

import { Container } from "./Container";
import { DiscordIcon } from "./icons/DiscordIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Header: React.FC = () => {
  return (
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
  );
};
