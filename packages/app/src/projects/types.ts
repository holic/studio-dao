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

export type Budget = {
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
  author: string;
  slug: string;
  juiceboxProjectId: number;
  description: string;
  shortDescription: string;
  imageURL: string;
  trailerUrl: string;
  usdBudget: number;
  nfts: NFT[];
  team: Bio[];
  budget: Budget;
  gallery: Gallery;
};

export interface Projects {
  [slug: string]: Project;
}
