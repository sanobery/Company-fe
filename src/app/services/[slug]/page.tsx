// app/team/[slug]/page.tsx
import ProductService from "@/services/service/service"
import ProductDetail from "@/components/sections/product/productDetail"

export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {
    const member = await ProductService.getBySlug(params.slug)

    if (!member) {
        return <div className="text-center p-10">Team member not found.</div>
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
