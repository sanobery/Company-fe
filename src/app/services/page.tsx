import Product from "@/components/sections/product/product"
import ProductService from "@/services/product/productService"
import { getMessage } from "@/lib/constantMessage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: getMessage("Service", "page"),
}

/**
 * Services Page Component
 * ------------------------
 * This component renders the Services page of the website.
 * It uses the reusable <Product /> component to display a list
 * of products or services offered by the company.
 *
 * The 'type' prop is set to "products" to indicate that the component
 * should fetch and display product-related data.
 */
export default async function Services() {
    const data = await ProductService.getAll()

    return <Product type="products" data={data} />
}

export const revalidate = 86400
