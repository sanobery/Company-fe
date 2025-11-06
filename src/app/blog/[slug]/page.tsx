// app/blog/[slug]/page.tsx
import EntityDetails from "@/components/shared/entityDetails"
import blogService from "@/services/blog/blogService"
import { SWRConfig } from "swr"
import { cache } from "react"
import { generateEntityMetadata } from "@/lib/seoUtils"

// ✅ Cached version of the fetcher
const getBlog = cache(async (slug: string) => {
    const post = await blogService.getBySlug(slug)
    return post
})

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}) {
    return generateEntityMetadata("blog", getBlog, params.slug)
}

export const revalidate = 86400

export default async function BlogPage({
    params,
}: {
    params: { slug: string }
}) {
    const post = await getBlog(params.slug)

    return (
        <SWRConfig value={{ fallback: { [`blog-${params.slug}`]: post } }}>
            <EntityDetails type="blog" slug={params.slug} />
        </SWRConfig>
    )
}
