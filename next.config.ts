/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-cdn.openxcell.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

