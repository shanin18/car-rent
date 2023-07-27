/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.ibb.co"], // Add your allowed domains for images here
  },
};

module.exports = nextConfig;
