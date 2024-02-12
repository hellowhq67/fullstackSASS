/** @type {import('next').NextConfig} */

const nextConfig = {
  output:"export",
    images: {
      loader:"custom",
      loaderFile:"loder.js",
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
          },
        ],
      },
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;
