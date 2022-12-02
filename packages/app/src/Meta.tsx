import Head from "next/head";

/**
 * Meta components need to be referenced as functions
 * Because Next.js's <Head> component does not work with
 * react components.
 */

export type MetaArgs = {
  type?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: {
    url: string;
    width: string;
    height: string;
  };
  siteUrl?: string;
  twitterHandle?: string;
  twitterId?: string;
  url?: string;
};

const defaults: MetaArgs = {
  type: "Website",
  title: "StudioDAO",
  description: `StudioDAO is  a movie studio owned by filmmakers and fans. Members purchase Super Tickets and vote on which movies receive weekly community grants. Grow your Greenlight Power by contributing to the community.`,
  keywords: "",
  image: { url: "/images/studiodaothumb.png", width: "450", height: "450" },
  siteUrl: "https://studiodao.xyz/",
  twitterHandle: "@studiodao",
  twitterId: "1392872850760081417",
};

type Props = {
  meta?: MetaArgs;
};

export const Meta = ({ meta }: Props) => (
  <Head>
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <title>{meta.title ? meta.title : defaults.title}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="referrer" content="always" />
    <meta
      name="description"
      content={meta.description ? meta.description : defaults.description}
    />
    <meta
      name="keywords"
      content={meta.description ? meta.description : defaults.description}
    />
    <link rel="icon" href="/favicon.ico" />

    <meta name="twitter:card" content={"summary_large_image"} />
    <meta
      name="twitter:site"
      content={meta.twitterHandle ? meta.twitterHandle : defaults.twitterHandle}
    />
    <meta
      name="twitter:site:id"
      content={meta.twitterId ? meta.twitterId : defaults.twitterId}
    />
    <meta
      name="twitter:image"
      content={meta.image ? meta.image.url : defaults.image?.url}
    />
    <meta
      name="twitter:title"
      content={meta.title ? meta.title : defaults.title}
    />

    <meta property="og:type" content={meta.type ? meta.type : defaults.type} />
    <meta
      property="og:site_name"
      content={meta.title ? meta.title : defaults.title}
    />
    <meta
      property="og:image"
      content={meta.image ? meta.image.url : defaults.image?.url}
    />
    <meta
      property="og:image:width"
      content={meta.image ? meta.image.width : defaults.image?.width}
    />
    <meta
      property="og:image:height"
      content={meta.image ? meta.image.height : defaults.image?.height}
    />
    <meta
      property="og:title"
      content={meta.title ? meta.title : defaults.title}
    />
    <meta
      property="og:description"
      content={meta.description ? meta.description : defaults.description}
    />
    <meta property="og:url" content={meta.url ? meta.url : defaults.url} />
  </Head>
);
