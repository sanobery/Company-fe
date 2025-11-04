import Product from "@/components/sections/product/product"

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
export default function Services() {
    return <Product type="products" />
}
