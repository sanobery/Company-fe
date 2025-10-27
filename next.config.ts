import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // domains: ["localhost"], // ✅ Allow Strapi dev server images
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
            {
                protocol: "https",
                hostname: "company-be.onrender.com",
            },
        ],
    },
}

export default nextConfig
