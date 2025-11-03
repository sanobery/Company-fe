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
