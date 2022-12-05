import { Project, Projects } from "./types";

const alienToMe: Project = {
  name: "Alien To Me",
  author: "Connor Kerrigan",
  slug: "alien-to-me",
  juiceboxProjectId: 124,
  description: `Discover a new universe with ALIEN TO ME. An animated
  comedy series from comedian, Connor Kerrigan, and the
  producers of Netflix’s WENDELL & WILD. Join a struggling
  alien named Krill, on an intergalactic odyssey of action,
  adventure, and pyramid scheme cosmetics sales – all in the
  name of love... or at the very least getting pregnant.`,
  shortDescription:
    "An intergalactic odyssey of action, adventure, and pyramid scheme cosmetics sales.",
  cta: "ON SALE NOW: First Generation NFTs - Funding Episodes 2 and 3",
  imageURL: "/images/alien-to-me/gallery/gallery_5.png",
  trailerUrl: "https://youtu.be/mm04Yos5_CQ",
  usdBudget: 25000,
  nfts: [
    {
      title: "Get Your Own URKEL",
      description: `Despite his grating voice, generally unlikable demeanor, and
      incredibly short attention span, URKEL, or Universal Robotic
      Kinesthetic Experience Liaison, has become the #1
      artificially intelligent robotic assistant across the
      cosmos. Why not welcome an URKEL into your house today?
      He’ll literally do anything for you… anything.`,
      price: 0.01,
      edition: 1000,
      imageURL: "/images/alien-to-me/nfts/urkel.gif",
      perks: {
        title: "Perks included:",
        perks: [
          "StudioDAO membership",
          "Greenlight Power Tokens (1000 per ETH in Funding Cycle#1)",
          "Early Access to Alien To Me Episode Releases",
          "The undying appreciation of the Alien to Me team for helping to bring this series to life",
        ],
      },
    },

    {
      title: "We are Krill’s Free Will",
      description: `Can’t seem to take control of your own life? Why not take
      control of somebody else’s life, specifically, this alien
      named Krill. In an attempt to sell off his large supply of
      Rexon Cosmetics products, Krill sold part of his free will
      to space titan, Taalos. Now Taalos is giving you a chance to
      get in on the fun too. C’mon you know you want to.`,
      price: 0.1,
      edition: 300,
      imageURL: "/images/alien-to-me/nfts/baseout.gif",
      perks: {
        title: "All Previous Perks Plus:",
        perks: [
          `Access to the Alien To Me Writer’s Room, where Connor
          will brainstorm and write new storylines for the next
          episodes in the series, using input from the community
          members as inspiration`,
          `Entered into raffle for 25 custom alien character
          portraits based of an image of your choosing (a picture
          of yourself, or anything else you like), hand painted by
          Connor, and that may be featured in the show, or coming
          immersive experience`,
          "Access to exclusive secondary Krill NFT content & activities",
          "Livestreams with Connor & Virtual hangouts",
        ],
      },
    },

    {
      title: "One with Taalos",
      description: `Put yourself into the Alien To Me universe, become one with
      the almighty space titan, Taalos! Let him make you in his
      image.`,
      price: 1.0,
      edition: 50,
      imageURL: "/images/alien-to-me/nfts/taalos.gif",
      perks: {
        title: "All Previous Perks Plus:",
        perks: [
          `Free custom alien character portrait based of an image
          of your choosing (a picture of yourself, or anything
          else you like), hand painted by Connor, and that may be
          featured in the show, or immersive experience`,
          `One on one consulting and advisory meeting with producer
          from The Gotham Group`,
          "Invitation to in-person Alien To Me events",
          "Associate Producer Credit",
          "Virtual Set Visit",
        ],
      },
    },
  ],
  team: [
    {
      name: "Connor Kerrigan",
      description: `Creator/Writer/Lead Artist - Connor Kerrigan is a Los Angeles based comedian, writer, and animator. Most recently he developed his own half-hour primetime animated adult comedy at Fox. Prior to his work with Fox, he wrote and executive produced a virtual reality comedy series pilot in partnership with Google and animation studio, ShadowMachine, starring Seth Morris, Mary Holland, and Chris Parnell. Connor is a formally trained animator and visual effects artist, who graduated from the USC School of Cinematic Arts. Having spent years doing improv, stand up, and sketch comedy, as well as working as a visual effects artist on multiple Netflix feature films, his work merges adult comedy with cinema quality 3D and 2D animation.`,
      imageURL: "/images/alien-to-me/bios/connor.jpg",
    },
    {
      name: "The Gotham Group",
      description: `Creator/Writer/Lead Artist - Connor Kerrigan is a Los Angeles based comedian, writer, and animator. Most recently he developed his own half-hour primetime animated adult comedy at Fox. Prior to his work with Fox, he wrote and executive produced a virtual reality comedy series pilot in partnership with Google and animation studio, ShadowMachine, starring Seth Morris, Mary Holland, and Chris Parnell. Connor is a formally trained animator and visual effects artist, who graduated from the USC School of Cinematic Arts. Having spent years doing improv, stand up, and sketch comedy, as well as working as a visual effects artist on multiple Netflix feature films, his work merges adult comedy with cinema quality 3D and 2D animation.`,
      imageURL: "/images/alien-to-me/bios/gotham.jpg",
    },
  ],
  timeline: {
    title: "Alien To Me Roadmap",
    description: "New NFTs released each month",
    events: [
      {
        title:
          "December 15  -  NFT Drop #1  - Funding Episodes 2 and 3 + community development",
        selected: true,
      },
      { title: "January 10 - Episode 1 Premiere", selected: false },
      {
        title: "NFT Drop #2 January 15th - Funding Episodes 4 and 5",
        selected: false,
      },
      { title: "Episode 2 Premiere", selected: false },
      {
        title: "NFT Drop #3- Funding Episodes 6 and 7",
        selected: false,
      },
      {
        title: "Episode 3 Premiere",
        selected: false,
      },
      {
        title:
          "NFT Drop #4  March 15th -  Funding Episodes 8 and 9 + Marketing",
        selected: false,
      },
      {
        title: "Episode 4 Premiere",
        selected: false,
      },
      {
        title: "NFT Drop #5  April 15th -  Funding Episodes 10 and 11",
        selected: false,
      },
      {
        title: "...More to Come",
        selected: false,
      },
    ],
  },
  backstory: {
    title: "Project Inspiration",
    text: `Alien To Me came to me out of a desire to see a new type of
    science fiction alien universe, and new aliens within it. I want
    to see a deep, visually rich universe, not dissimilar to your Star
    Wars and Treks, but that was rooted in the comedy of the life of
    everyday aliens. Not another story of war or rebellion, but about
    dating, working, being a loser, dealing with weirdos, taking a
    shower, just existing in the insane science fiction worlds we all
    love so much. Honestly, I think it would suck, but that’s where
    the comedy came from for me. These sci-fi universe’s often fail to
    consider how the logistics and idiosyncrasies of the design or
    culture, would turn regular life into a constant battle for people
    that aren’t our protagonists. They simply gloss over the details.
    Alien To Me lives in the details. Our main character, Krill, is a
    naive rube, who has never left the comfort of his home quadrant,
    where he lived off his rich parent’s money. But, when he leaves
    home to go in search of his ex-girlfriend’s ex-boyfriend to try to
    get pregnant… it’s convoluted, I’m aware… he will discover, life
    out in the cosmos, isn’t all it’s cracked up to be. I hope you’ll
    come along on this journey, and together we can create a truly
    unique sci-fi comedy franchise that can expand for years to come.`,
  },
  gallery: {
    title: "Alien To Me Gallery",
    description: "",
    imageURLs: [
      "/images/alien-to-me/gallery/gallery_1.png",
      "/images/alien-to-me/gallery/gallery_2.png",
      "/images/alien-to-me/gallery/gallery_3.png",
      "/images/alien-to-me/gallery/gallery_4.png",
      "/images/alien-to-me/gallery/gallery_5.png",
      "/images/alien-to-me/gallery/gallery_6.png",
      "/images/alien-to-me/gallery/gallery_7.png",
      "/images/alien-to-me/gallery/gallery_8.png",
      "/images/alien-to-me/gallery/gallery_9.png",
      "/images/alien-to-me/gallery/gallery_10.png",
      "/images/alien-to-me/gallery/gallery_11.png",
      "/images/alien-to-me/gallery/gallery_12.png",
    ],
  },
};

export const projects: Projects = {
  "alien-to-me": alienToMe,
};

export const projectSlugs = ["alien-to-me"];
