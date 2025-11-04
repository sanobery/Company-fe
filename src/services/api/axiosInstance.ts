import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL

export const strapi = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        Accept: "Application/json",
    },
})
