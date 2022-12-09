import { Project, Projects } from "./types";

const alienToMe: Project = {
  name: "Alien To Me",
  author: "Connor Kerrigan",
  slug: "alien-to-me",
  juiceboxProjectId: 124,
  description: `Discover a new universe with ALIEN TO ME,  a new animated comedy series from comedian, Connor Kerrigan, and the producers of Netflix’s WENDELL & WILD.  Join a struggling alien named Krill on an intergalactic odyssey of action, adventure, and pyramid scheme cosmetics sales – all in the name of love... or at the very least getting pregnant.`,
  shortDescription:
    "An intergalactic odyssey of action, adventure, and pyramid scheme cosmetics sales.",
  cta: "ON SALE NOW: First Generation NFTs - Funding Episodes 2 and 3",
  imageURL: "/images/alien-to-me/gallery/gallery_5.png",
  trailerUrl: "https://youtu.be/J6ZV57TrhEE",
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
          "Unlock exclusive Alien To Me Discord channels",
          "StudioDAO membership",
          "10 StudioDAO Greenlight Power Tokens",
          "The undying appreciation of the Alien to Me team for helping to bring this series to life",
        ],
      },
    },

    {
      title: "We are Krill",
      description: `Go with Krill on his epic journey across the universe, by filling his wallet with parcels (alien money). Whether it’s finding a place to stay, food to eat, or drugs to inject, it all costs something, and god only knows how long this moron will last out there if we don’t help. Don’t let Krill get stranded alone… scared… confused… horny… in a universe that he barely knows. Show your support today!`,
      price: 0.1,
      edition: 150,
      imageURL: "/images/alien-to-me/nfts/baseout.gif",
      perks: {
        title: "All Previous Perks Plus:",
        perks: [
          "Early access to this month’s episode release",
          `Access to the Alien To Me Writer’s Room, where Connor
          will brainstorm and write new storylines for the next
          episodes in the series, using input from the community
          members as inspiration`,
          `Entered into raffle for 25 custom alien character
          portraits based of an image of your choosing (a picture
          of yourself, or anything else you like), hand painted by
          Connor, and that may be featured in the show`,
          "100 StudioDAO Greenlight Power Tokens",
        ],
      },
    },

    {
      title: "One with Taalos",
      description: `Put yourself into the Alien To Me universe, become one with
      the almighty space titan, Taalos! Let him make you in his
      image.`,
      price: 1.0,
      edition: 25,
      imageURL: "/images/alien-to-me/nfts/taalos.gif",
      perks: {
        title: "All Previous Perks Plus:",
        perks: [
          "Mint an exclusive NFT of this month’s episode",
          "We will create a custom alien character portrait based of an image of your choosing (a picture of yourself, or anything else you like), hand painted by Connor, and that may be featured in the show",
          "One on one consultation with our producers at The Gotham Group",
          "1000 StudioDAO Greenlight Power Tokens",
        ],
      },
    },
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
          "Unlock exclusive Alien To Me Discord channels",
          "StudioDAO membership",
          "10 StudioDAO Greenlight Power Tokens",
          "The undying appreciation of the Alien to Me team for helping to bring this series to life",
        ],
      },
    },

    {
      title: "We are Krill",
      description: `Go with Krill on his epic journey across the universe, by filling his wallet with parcels (alien money). Whether it’s finding a place to stay, food to eat, or drugs to inject, it all costs something, and god only knows how long this moron will last out there if we don’t help. Don’t let Krill get stranded alone… scared… confused… horny… in a universe that he barely knows. Show your support today!`,
      price: 0.1,
      edition: 150,
      imageURL: "/images/alien-to-me/nfts/baseout.gif",
      perks: {
        title: "All Previous Perks Plus:",
        perks: [
          "Early access to this month’s episode release",
          `Access to the Alien To Me Writer’s Room, where Connor
          will brainstorm and write new storylines for the next
          episodes in the series, using input from the community
          members as inspiration`,
          `Entered into raffle for 25 custom alien character
          portraits based of an image of your choosing (a picture
          of yourself, or anything else you like), hand painted by
          Connor, and that may be featured in the show`,
          "100 StudioDAO Greenlight Power Tokens",
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
          "December 15th - NFT Drop #1 - Proceeds to go towards producing Episodes 2 and 3 + community development",
        selected: true,
      },
      { title: "January 10th - Episode 1 Premiere", selected: false },
      {
        title:
          "January 15th - NFT Drop #2 - Proceeds to go towards producing Episodes 4 and 5",
        selected: false,
      },
      { title: "February 10th - Episode 2 Premiere", selected: false },
      {
        title:
          "NFT Drop #3 - Proceeds to go towards producing Episodes 6 and 7",
        selected: false,
      },
      {
        title: "March 10th - Episode 3 Premiere",
        selected: false,
      },
      {
        title:
          "March 15th - NFT Drop #4 - Proceeds to go towards producing Episodes 8 and 9 + Marketing",
        selected: false,
      },
      {
        title: "April 10th - Episode 4 Premiere",
        selected: false,
      },
      {
        title:
          "April 15th - NFT Drop #5 - Proceeds to go towards producing Episodes 10 and 11",
        selected: false,
      },
      {
        title: "...More to Come",
        selected: false,
      },
    ],
  },
  backstory: {
    title: "About the Project",
    text: `Alien to Me was inspired by every alien wandering around in the background of your favorite sci-fi movies. Creator, Connor Kerrigan, couldn’t help but ask “What are all these losers up to?”, and thus Alien to Me was born.  Set against a visually rich and deeply twisted alien universe, our show will follow the naively optimistic deadbeat named Krill as he stumbles through the galaxy in search of his ex-girlfriend’s ex-boyfriend, to try to get pregnant. Don’t worry, it’ll make sense in the show. Connor knew the only way to make a show this weird, both narratively and visually, is to go directly to the people who want to watch it. That’s where you come in, the more Alien to Me NFTs you buy, the more Alien to Me episodes get made. New NFTs come out every month, each with exclusive perks that give you access to participate in the creation of the Alien to Me universe. Come along on this journey, and together we can create a truly unique sci-fi comedy franchise that can expand for years to come.`,
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
