/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/ayka",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
