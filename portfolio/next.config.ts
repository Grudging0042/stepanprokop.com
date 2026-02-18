import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Output standalone for Docker/Coolify deployment
  output: "standalone",
  
  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"], // Modern formats for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon/thumbnail sizes
    minimumCacheTTL: 60, // Cache optimized images for at least 60 seconds
  },
};

// Basic MDX configuration
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {},
});

// Wrap MDX config
export default withMDX(nextConfig);
