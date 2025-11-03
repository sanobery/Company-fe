import { safeRequest } from "../utils/processApi"
import { strapi } from "../api/axiosInstance"

const HomeService = {
    getAll: async () =>
        safeRequest(async () => {
            const res = await strapi.get(
                "/site-setting?populate[hero][populate]=image&populate[testimonials]=*&populate[processSection][populate][Steps]=*&populate[stepSection][populate]=*"
            )
            return res.data.data
        }, null),
}

export default HomeService
