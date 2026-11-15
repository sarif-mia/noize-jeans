import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Self-contained server bundle for the Docker image.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep old PHP-era URLs working.
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/:page(about|care|contact|customer|design|men|production|products|sustainable|women).php", destination: "/:page", permanent: true },
      { source: "/pages/:page.php", destination: "/:page", permanent: true },
      { source: "/document/:file*", destination: "/documents/:file*", permanent: true },
      { source: "/assets/images/:file*", destination: "/images/:file*", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
