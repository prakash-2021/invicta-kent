import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "invicta-kent-admin.xyz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
