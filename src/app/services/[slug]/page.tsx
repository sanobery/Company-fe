// app/team/[slug]/page.tsx
import ProductService from "@/services/product/productService"
import ProductDetail from "@/components/sections/product/productDetail"
import { getMessage } from "@/lib/constantMessage"
import Hero from "@/components/sections/home/hero"

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
export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {
    const member = await ProductService.getBySlug(params.slug)

    if (!member) {
        return (
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph={getMessage("Service", "notFound")}
                image="/images/home2.webp"
                showContactPage={false}
                notFound={true}
            />
        )
    }

    const { documentId, title, theme, image, price, description } = member

    return (
        <>
            <ProductDetail
                documentId={documentId}
                title={title}
                theme={theme}
                image={image}
                price={price}
                description={description}
            />
        </>
    )
}
