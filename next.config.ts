import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["localhost"], // ✅ Allow Strapi dev server images
    },
}

export default nextConfig
