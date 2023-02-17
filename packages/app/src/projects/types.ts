export type Event = {
  title: string;
  selected: boolean;
};

export type NFTPerks = {
  title: string;
  perks: string[];
};

export type NFT = {
  title: string;
  description: string;
  price: number;
  edition: number;
  imageURL: string;
  perks: NFTPerks;
};

export type Bio = {
  name: string;
  description: string;
  imageURL: string;
};

export type Timeline = {
  title: string;
  description: string;
  events: Event[];
};

export type Gallery = {
  title: string;
  description: string;
  imageURLs: string[];
};

export type Project = {
  name: string;
  promote: {
    intro: string;
    description: string[];
  };
  author: string;
  slug: string;
  juiceboxProjectId: number;
  description: string;
  shortDescription: string;
  cta: string;
  ctaPostScript: string;
  imageURL: string;
  headerImageURL: string;
  trailerUrl: string;
  usdBudget: number;
  nfts: NFT[];
  team: Bio[];
  timeline: Timeline;
  backstory: {
    title: string;
    text: string;
  };
  gallery: Gallery;
};

export interface Projects {
  [slug: string]: Project;
}
