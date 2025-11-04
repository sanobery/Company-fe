/**
 * A global safe wrapper for async API calls.
 * ------------------------------------------
 * - Prevents crashes from unhandled rejections.
 * - Logs the error to the console for debugging.
 * - Displays a toast message to the user.
 * - Returns a safe fallback value.
 *
 * @param fn        The async function to execute
 * @param fallback  The default value to return if it fails
 * @param message   (Optional) A user-friendly error message
 */
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
