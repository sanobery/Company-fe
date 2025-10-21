import axios from "axios"
import { safeRequest } from "../utils/processApi"

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL

export const strapi = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        Accept: "Application/json",
    },
})

const teamService = {
    getAll: async () =>
        safeRequest(async () => {
            const res = await strapi.get("/team-members?populate=photo")
            return res.data.data
        }, []),

    getBySlug: async (slug: string) =>
        safeRequest(async () => {
            const res = await strapi.get(
                `/team-members?filters[documentId][$eq]=${slug}&populate=photo`
            )
            return res.data.data?.[0] || null
        }, null),
}

export default teamService
