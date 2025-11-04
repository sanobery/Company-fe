import { strapi } from "../api/axiosInstance"
import { safeRequest } from "../utils/processApi"

const teamService = {
    getAll: async () =>
        safeRequest(async () => {
            const res = await strapi.get("/team-members?populate=image")
            return res.data.data
        }, []),

    getById: async (id: number) =>
        safeRequest(async () => {
            const res = await strapi.get(
                `/team-members?filters[id][$eq]=${id}&populate=image`
            )
            return res.data.data?.[0] || null
        }, null),
}

export default teamService
