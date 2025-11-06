// app/team/[id]/page.tsx
import Hero from "@/components/sections/home/hero"
import EntityDetails from "@/components/shared/entityDetails"
import { getMessage } from "@/lib/constantMessage"
import teamService from "@/services/team/teamService"
import { SWRConfig } from "swr"
import { cache } from "react"
import { generateEntityMetadata } from "@/lib/seoUtils"

// ✅ Cached version of the fetcher
const getTeamMemberDetail = cache(async (slug: string) => {
    const post = await teamService.getById(Number(slug))
    return post
})

export async function generateMetadata({ params }: { params: { id: string } }) {
    return generateEntityMetadata("team", getTeamMemberDetail, params.id)
}

/**
 * Dynamic Product/Team Detail Page
 * ---------------------------------
 * This Next.js server component renders a detailed view of a specific
 * product or team member, based on the dynamic [slug] route parameter.
 *
 * The `slug` parameter is used to fetch the corresponding item
 * from the ProductService (via an async data call).
 *
 * If no item is found for the given slug, a "not found" message
 * is displayed to the user.
 */
export default async function TeamMemberPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const data = await getTeamMemberDetail(id)

    if (!data) {
        return (
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph={getMessage("team member", "notFound")}
                image="/images/home2.webp"
                showContactPage={false}
                notFound={true}
            />
        )
    }

    return (
        <SWRConfig value={{ fallback: { [`team-${id}`]: data } }}>
            <EntityDetails type="team" slug={id} />
        </SWRConfig>
    )
}
