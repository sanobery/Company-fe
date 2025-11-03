// app/blog/[slug]/page.tsx
import EntityDetails from "@/components/shared/entityDetails"
import blogService from "@/services/blog/blogService"
import { SWRConfig } from "swr"

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
