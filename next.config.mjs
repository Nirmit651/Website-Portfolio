/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@vercel/analytics",
      "framer-motion",
      "lucide-react",
      "next-themes"
    ]
  }
};

export default nextConfig;
