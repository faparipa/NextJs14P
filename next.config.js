/** @type {import('next').NextConfig} */
const nextConfig = {
  //ha külső oldalról szertnénk képeket betölteni azt így kell:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
