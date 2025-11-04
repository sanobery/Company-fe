import { safeRequest } from "../utils/processApi"
import { strapi } from "../api/axiosInstance"
import qs from "qs"

const HomeService = {
    getAll: async () =>
        safeRequest(async () => {
            const res = await strapi.get(
                "/site-setting?populate[hero][populate]=image&populate[testimonials]=*&populate[processSection][populate][Steps]=*&populate[stepSection][populate]=*"
            )
            return res.data.data
        }, null),

    getfooter: async () =>
        safeRequest(async () => {
            const query = qs.stringify(
                {
                    populate: {
                        footerSection: {
                            populate: {
                                image: true,
                                socialMediaIcon: true,
                                footerLinkGroup: {
                                    populate: {
                                        groupLinks: true,
                                    },
                                },
                            },
                        },
                    },
                },
                { encodeValuesOnly: true }
            )

            const res = await strapi.get(`/site-setting?${query}`)
            return res.data.data
        }, null),
}

export default HomeService
