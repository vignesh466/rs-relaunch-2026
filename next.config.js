/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "automatic-cabbage-5a6930dc68.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Preserve existing static file handling
  assetPrefix: "",
  trailingSlash: false,
  // Ensure compatibility with existing assets
  async rewrites() {
    return [
      {
        source: "/assets/:path*",
        destination: "/assets/:path*",
      },
    ];
  },
};

export default nextConfig;
