/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["jbx.mypinata.cloud"],
  },
  async redirects() {
    return [
      {
        source: "/terms-of-use",
        destination: "https://studio-dao.webflow.io/terms-of-use",
        permanent: false,
      },
      {
        source: "/terms-of-service",
        destination: "https://studio-dao.webflow.io/terms-of-service",
        permanent: false,
      },
    ];
  },
};
