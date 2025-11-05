import Product from "@/components/sections/product/product"
import teamService from "@/services/team/teamService"
import { Metadata } from "next"

/**
 * Metadata Configuration
 * ----------------------
 * Defines SEO and social metadata for the Team page.
 */
export const metadata: Metadata = {
    title: "Our Team | Interio",
    description:
        "Meet our team of passionate interior designers in Bangalore. Each designer brings creativity, innovation, and expertise to deliver stunning, personalized interiors.",
    keywords: [
        "interior designers in Bangalore",
        "home interior design team",
        "luxury interiors JP Nagar",
        "Interio design experts",
    ],
    openGraph: {
        title: "Meet Our Interior Design Team | Interio",
        description:
            "Discover the talented professionals behind Interio’s innovative interiors in Bangalore. Our team brings life to every project with passion and precision.",
        url: "https://yourdomain.com/team",
        type: "website",
        siteName: "Interio",
        images: [
            {
                url: "https://yourdomain.com/og-images/team.jpg",
                width: 1200,
                height: 630,
                alt: "Interio Design Team",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Meet Our Interior Design Team | Interio",
        description:
            "Get to know the creative minds designing your dream spaces at Interio.",
        images: ["https://yourdomain.com/og-images/team.jpg"],
    },
}

/**
 * Team Page Component
 * -------------------
 * This page renders the "Team" section of the website.
 *
 * - It is a **Server Component** that fetches team data at build time.
 * - The data is passed to the reusable <Product /> component, which
 *   displays team members dynamically based on the `type="team"` prop.
 * - Incremental Static Regeneration (ISR) is enabled via `revalidate`.
 *
 * @async
 * @function Team
 * @returns {JSX.Element} A rendered list of team members.
 */
export default async function Team() {
    const data = await teamService.getAll()

    return <Product type="team" data={data} />
}

export const revalidate = 86400
