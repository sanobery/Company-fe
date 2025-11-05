import Product from "@/components/sections/product/product"
import { getMessage } from "@/lib/constantMessage"
import teamService from "@/services/team/teamService"
import { Metadata } from "next"

/**
 * Metadata Configuration
 * ----------------------
 * Defines SEO and social metadata for the Team page.
 */
export const metadata: Metadata = {
    title: getMessage("Our Team", "page"),
    description:
        "Meet our team of passionate interior designers in Bangalore. Each designer brings creativity, innovation, and expertise to deliver stunning, personalized interiors.",
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
