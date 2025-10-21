import { safeRequest } from "../utils/processApi"
import { strapi } from "../api/axiosInstance"

const ProductService = {
    getAll: async () =>
        safeRequest(async () => {
            const res = await strapi.get("/services?populate=image")
            return res.data.data
        }, []),

    getBySlug: async (slug: string) =>
        safeRequest(async () => {
            const res = await strapi.get(
                `/services?filters[documentId][$eq]=${slug}&populate=image`
            )
            return res.data.data?.[0] || null
        }, null),
}

export default ProductService
