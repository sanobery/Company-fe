// app/blog/[slug]/page.tsx
import EntityDetails from "@/components/shared/entityDetails"
import blogService from "@/services/blog/blogService"
import { SWRConfig } from "swr"

/**
 * BlogPage Component (Server Component)
 *
 * - This page handles dynamic blog routes: `/blog/[slug]`.
 * - Fetches a specific blog post using its slug.
 * - Wraps the page in SWRConfig to provide initial (fallback) data for client-side hydration.
 * - Uses Incremental Static Regeneration (ISR) with a revalidation interval.
 *
 * @async
 * @function BlogPage
 * @param {{ params: Promise<{ slug: string }> }} props - The dynamic route parameters.
 * @returns {JSX.Element} The rendered blog detail page wrapped with SWRConfig.
 *
 * @example
 * // Example route:
 * // /blog/my-first-post
 */
export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const data = await blogService.getBySlug(slug)

    return (
        <SWRConfig value={{ fallback: { [`blog-${slug}`]: data } }}>
            <EntityDetails type="blog" slug={slug} />
        </SWRConfig>
    )
}

export const revalidate = 86400 // ✅ ISR: revalidate once per day (optional)
