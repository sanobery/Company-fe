// app/team/[slug]/page.tsx
import BlogSlug from "@/components/blog/blogSlug"
import blogService from "@/services/blog/blogService"
import { SWRConfig } from "swr"

export default async function BlogPage({
    params,
}: {
    params: { slug: string }
}) {
    const member = await blogService.getBySlug(params.slug)

    return (
        <SWRConfig value={{ fallback: { [params.slug]: member } }}>
            <BlogSlug slug={params.slug} />
        </SWRConfig>
    )
}
