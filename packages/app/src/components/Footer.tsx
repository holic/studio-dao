import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center divide-y divide-zinc-700 mt-16">
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
  );
};
