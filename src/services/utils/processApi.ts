// lib/utils.ts
export async function safeRequest<T>(
    fn: () => Promise<T>,
    fallback: T
): Promise<T> {
    try {
        return await fn()
    } catch (error) {
        return fallback
    }
}
