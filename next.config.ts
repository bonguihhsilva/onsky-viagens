import path from "node:path";
import type { NextConfig } from "next";

// GitHub Pages serves the site under /<repo>; empty for a root domain deploy.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
