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
  ctaPostScript: "",
  imageURL: "/images/alien-to-me/gallery/gallery_5.png",
  headerImageURL: "",
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

const ticketToSpace: Project = {
  name: "MoonDAO: Ticket to Space",
  author: "Fernando Urdapilleta",
  slug: "moon-dao-ticket-to-space",
  juiceboxProjectId: 124,
  description: `MoonDAO, a community of 12,000 blockchain organized members, has achieved one of their early phase goals: sending a fellow member to space. In mainland China, an ordinary man’s life is about to change dramatically. After buying the community’s tokens on speculation and YOLO, he was randomly selected to be the one to launch into lower orbit. Against the objections of his family, he will embark on a journey that will take him from the dense urbanity of Beijing to the vastness of Western Texas, and ultimately to the enormous solitude of space and the unknown.`,
  shortDescription:
    "MoonDAO, a community of 12,000 blockchain organized members, has achieved one of their early phase goals: sending a fellow member to space.",
  cta: "✦ Support the production of MoonDAO: Ticket To Space",
  ctaPostScript:
    "These NFTs provide access to the Ticket To Space Speaker Series and Film Screenings. They also grant membership in StudioDAO, a new entertainment platform that turns film fans into studio executives.",
  headerImageURL: "/images/ticket-to-space/header.png",
  imageURL: "/images/ticket-to-space/nfts/launchpad.png",
  trailerUrl: "",
  usdBudget: 25000,
  nfts: [
    {
      title: "Launchpad",
      description: `For the price of a movie ticket, take a vicarious journey of discovery with a lucky MoonDAO member as he travels to Space…`,
      price: 0.01,
      edition: 100,
      imageURL: "/images/ticket-to-space/nfts/launchpad.png",
      perks: {
        title: "Perks included:",
        perks: [
          `LaunchPad "Special Thanks" Onscreen Credit after film`,
          "StudioDAO Membership",
          "StudioDAO Greenlight Power Tokens",
        ],
      },
    },

    {
      title: "Lift Off",
      description: `Another small step for mankind!  As our hero trains for a journey to Space, our filmmakers get ready to launch into action. Your support at this level helps the movie lift off into production!`,
      price: 0.1,
      edition: 50,
      imageURL: "/images/ticket-to-space/nfts/liftoff.png",
      perks: {
        title: "Perks include:",
        perks: [
          `LaunchPad "Special Thanks" Onscreen Credit after film`,
          `Limited Edition (1 of 500) “Mission” Sticker pack`,
          "StudioDAO Membership",
          "StudioDAO Greenlight Power Tokens",
        ],
      },
    },
    {
      title: "Zero Gravity",
      description: `Less than 600 people have crossed the Karman Line, the border between the Earth’s atmosphere and Space.  This film will document what happens when the first ever MoonDAO member takes this historic ride`,
      price: 1.0,
      edition: 5,
      imageURL: "/images/ticket-to-space/nfts/zerogravity.png",
      perks: {
        title: "Perks include:",
        perks: [
          `"Produced In Association With" Onscreen Credit before Film`,
          `Limited edition "Mission Sticker" carried to Space by MoonDAO’s Astronaut  (1 of 100)`,
          "StudioDAO Membership",
          "StudioDAO Greenlight Power Tokens",
        ],
      },
    },
    {
      title: "Moonshot",
      description: `We all feel quite giddy and weightless when we think about you YOLOing in to support this film at this level!`,
      price: 10.0,
      edition: 3,
      imageURL: "/images/ticket-to-space/nfts/moonshot.png",
      perks: {
        title: "Perks include:",
        perks: [
          `"Executive Producer" Onscreen Credit before Film`,
          "Limited edition (1 of 50) Mission Patch carried to Space by MoonDAO’s Astronaut",
          "StudioDAO will produce a special event for your DAO’s membership",
          "StudioDAO Membership",
          "StudioDAO Greenlight Power Tokens",
        ],
      },
    },
    {
      title: "Moonbase",
      description: `Your perks will soar beyond lower orbit, all the way to the moon and back!`,
      price: 50.0,
      edition: 1,
      imageURL: "/images/ticket-to-space/nfts/moonbase.png",
      perks: {
        title: "All Previous Perks Plus:",
        perks: [
          `“Executive Producer” Single Card Onscreen Credit before Film`,
          `"Ticket To Space" Movie Ticket carried to space by MoonDAO’s Astronaut - (1 of 10)`,
          "StudioDAO will produce a special event for your DAO’s membership",
          "StudioDAO Membership",
          "StudioDAO Greenlight Power Tokens",
        ],
      },
    },
  ],
  team: [
    {
      name: "Fernando Urdapilleta",
      description: `Director - Fernando Urdapilleta is a filmmaker and social scientist with a passion for character and environmental driven narratives. His fascination with foreign cultures has brought him from the banks of the Ganges river to the deep Amazon rainforest. A strong believer in producing change through storytelling, his latest feature documentary “Hostil” (2022) made it into national headlines and assembled a collective effort to pressure Argentina’s congress into protecting over 250.000 hectares of wild peatlands. He has worked as a cinematographer and editor in over five feature social and environmental documentary films. Previous clients include Google, ESPN, Catena Zapata Vineyards, Mercedes-Benz, among others.`,
      imageURL: "/images/ticket-to-space/bios/fernando.png",
    },
    {
      name: "Susie Conley",
      description: `Producer - Susie is a seasoned Executive Producer and Film Director in travel advertising and documentary branded content, while raising a family in San Francisco. She brings a servant leadership approach and is invigorated by impact stories from technology, regenerative food systems, global pop culture, and immigrants & refugees. Most recently, she spent 8 years building and overseeing Tripadvisor’s large-scale Creative & Content Studio servicing advertising clients and editorial video content for the media group’s suite of travel brands. She oversaw a team of 40 and directly led thousands of international productions, unscripted series development, strategic marketing and distribution, and complex multi-million dollar budgets. Past clients: Universal Studios, Japan Airlines, Microsoft, & bajillions of tourism boards.`,
      imageURL: "/images/ticket-to-space/bios/susie.png",
    },
  ],
  timeline: {
    title: "Roadmap",
    description: "This project is funded in partnership with MoonDAO.",
    events: [
      {
        title:
          "Funding Cycle #1   $125,000 - Campaign Kickoff, Film Development, 1st Film Shoot",
        selected: true,
      },
      { title: "Funding Cycle #2   $300,000 - Production", selected: false },
      {
        title:
          "Funding Cycle #3   $75,000 - Post Completion, Marketing, Sales, Distribution",
        selected: false,
      },
    ],
  },
  backstory: {
    title: "Project Inspiration",
    text: `Why this story?

    Making human life multi-planetary is one of the most inspiring and important missions of humanity. We are living at the inflection point of a privatized space race, with economic implications that will define our future.
    
    Meanwhile there is a new era of the internet evolving beyond cat videos and Twitter. Blockchain technology enables users with not only the Web 2.0 capabilities of Reading and Writing the internet, but is now incorporating Ownership. This shift to a decentralized Web 3.0 version of the internet is a chance to evolve the internet’s “winner takes all” mindset into a “community above all” one.
    
    A web3 community-led organization, MoonDAO, has no central authority, and has cultivated a community with values that bridging Western and Eastern values alike. With over 25,000 members worldwide, MoonDAO harbors two main cultural paradigms within: westerners brought up with extreme individualism, and Chinese culture raised to put the group over the individual.
    In a world of dramatic contrasts, where the rawness of Beijing’s city life seems a universe apart from that of the pristine nature of western Texas, the virtual world of Web3 emerges as the great equalizer.
    
    The big questions are: What is the significance of an ordinary person going to space? Can it inspire space research and exploration again after billionaires made rocketships their latest mid-life crisis Lamborghini?
    
    Are DAOs the beginning of a new era of human endeavor? Can an international, decentralized, inclusive, and transparent organization better align with the needs of the everyday person than private billionaires or nations?
    
    Or is MoonDAO ultimately just another crypto meme coin? Can web3 fulfill its promise to build a more equitable world? And achieve the monumental? Or is it just another passing fad?
    `,
  },
  gallery: {
    title: "Gallery",
    description: "",
    imageURLs: [
      "/images/ticket-to-space/gallery/p1.png",
      "/images/ticket-to-space/gallery/p2.png",
      "/images/ticket-to-space/gallery/p3.png",
      "/images/ticket-to-space/gallery/p4.png",
      "/images/ticket-to-space/gallery/p5.png",
      "/images/ticket-to-space/gallery/p6.png",
      "/images/ticket-to-space/gallery/p7.png",
      "/images/ticket-to-space/gallery/p8.png",
      "/images/ticket-to-space/gallery/p9.png",
      "/images/ticket-to-space/gallery/p10.png",
    ],
  },
};

export const projects: Projects = {
  // "alien-to-me": alienToMe,
  "moon-dao-ticket-to-space": ticketToSpace,
};

export const projectSlugs = ["moon-dao-ticket-to-space"];
