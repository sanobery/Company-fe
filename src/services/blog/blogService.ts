import { safeRequest } from "../utils/processApi"
import { strapi } from "../api/axiosInstance"

const blogService = {
    getAll: async () =>
        safeRequest(async () => {
            const res = await strapi.get(
                "/blogs?populate[author][populate]=image&populate=image"
            )
            return res.data.data
        }, []),

    getBySlug: async (slug: string) =>
        safeRequest(async () => {
            const res = await strapi.get(
                `/blogs?filters[documentId][$eq]=${slug}&populate[author][populate]=image&populate=image`
            )
            return res.data.data?.[0] || null
        }, null),
}

export default blogService
