/** =============================================
 Constant Messages
 =============================================
 - Centralized repository for reusable messages
 - Helps maintain consistency across the application
 - Reduces hardcoding of strings in multiple files
 - Makes updates easier (change once, reflect everywhere)
 - Supports better maintainability and localization
 ============================================= */

const CONSTANTMESSAGE = {
    PHONE_NUM_REGEX: /^\+?[0-9]{10}$/,
    INVALID_PHONE_NUMBER: "Enter a valid phone number (10 digits).",
    SUCCESS_MESSAGE: "Message sent successfully!",
    FAILED_MESSAGE: "Failed to send message. Please try again.",
    ERROR_MESSAGE: "Something went wrong: ",
}

export function getMessage(field: string, type: string, extra?: string) {
    const fieldName = field.charAt(0).toUpperCase() + field.slice(1)
    switch (type) {
        case "required":
            return `${fieldName} is required.`
        case "invalid":
            return extra
                ? `${fieldName} must be ${extra}.`
                : `${fieldName} is invalid.`
        case "notFound":
            return `${fieldName} not found.`
        case "failed":
            return `Failed to load ${fieldName}.Please try again later.`
        case "loading":
            return `Loading ${fieldName}... Please Wait !!!`
        default:
            return `${fieldName} error.`
    }
}

export default CONSTANTMESSAGE
