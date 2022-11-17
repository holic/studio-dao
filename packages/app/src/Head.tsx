// import { SEO } from '../SEO'
import Script from "next/script";

export const Head: React.FC = () => {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const siteDescription =
    "StudioDAO is  a movie studio owned by filmmakers and fans. Members purchase Super Tickets and vote on which movies receive weekly community grants. Grow your Greenlight Power by contributing to the community.";

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script
        id="ga"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <title>StudioDAO</title>
      <meta name="description" content={siteDescription} />
      <meta property="twitter:title" content="StudioDAO" />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://assets.website-files.com/62c4a1bbbb81016b15e64da5/634f8181f7785f119bb393f6_StudioDAO-GreenLight-Sq-04.png"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
