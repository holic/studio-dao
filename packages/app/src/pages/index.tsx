import type { NextPage } from "next";
import Link from "next/link";

import { Container } from "../Container";

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
            <nav className="flex-grow hidden md:flex items-center justify-center -m-4"></nav>
          </div>
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
                  <div></div>
                  <div className="hidden sm:block"></div>
                </div>
              </Container>
            </div>
            <div className="flex-grow flex flex-col justify-end items-center">
              <Container>
                <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                  <div className="space-y-4 w-4/5">
                    <h1 className="text-6xl font-dmserif text-white">
                      StudioDAO U.N.A. is now closed.
                    </h1>
                    <p>
                      Thank you for being a part of the exploration of an
                      experimental new way to fund films. We are immensely
                      grateful for the journey we shared.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-2 w-max"></div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 mt-16 flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-end text-zinc-600">
        <div className="flex flex-row gap-x-6">
          <span>©{new Date().getFullYear()} StudioDAO Backlot, LLC.</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
