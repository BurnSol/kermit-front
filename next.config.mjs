/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  //basePath: "/kermit-front",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;