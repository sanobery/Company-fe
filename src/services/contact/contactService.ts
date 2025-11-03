import { safeRequest } from "../utils/processApi"
import { strapi } from "../api/axiosInstance"
import { ContactPayload } from "@/types/companyInterface"

const ContactService = {
    createOne: async (payload: ContactPayload) =>
        safeRequest(async () => {
            const res = await strapi.post("/contacts", payload)
            return res.data.data
        }, null),
}

export default ContactService
