// Validate the environment variables
await import("./src/env/client.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: "export",
};

export default nextConfig;
