import CONSTANTMESSAGE from "@/lib/constantMessage"
import toast from "react-hot-toast"

// lib/utils.ts
export async function safeRequest<T>(
    fn: () => Promise<T>,
    fallback: T
): Promise<T> {
    try {
        return await fn()
    } catch (error) {
        toast.error(CONSTANTMESSAGE.ERROR_MESSAGE + error)
        return fallback
    }
}
