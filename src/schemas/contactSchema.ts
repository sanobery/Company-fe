import CONSTANTMESSAGE, { getMessage } from "@/lib/constantMessage"
import { z } from "zod"

/**
 * contactSchema
 * ------------------------------------------------------------
 * A Zod validation schema for validating the contact form inputs.
 * Ensures that the username, email, and phone fields meet the
 * required format and constraints before submission.
 *
 * Validates:
 *  - username: between 4–20 characters (trimmed, no extra spaces)
 *  - email: must be a valid email format
 *  - phone: must be a valid numeric string with exactly 10 digits,
 *           optional '+' prefix allowed
 *
 * Custom error messages:
 *  - Uses `getMessage()` and `CONSTANTMESSAGE` for consistent and
 *    reusable validation messages across the app.
 */
export const contactSchema = z.object({
    username: z
        .string()
        .trim()
        .min(4, {
            message: getMessage("username", "invalid", "at least 4 characters"),
        })
        .max(20, {
            message: getMessage("username", "invalid", "maximum 20 characters"),
        }),

    email: z
        .string()
        .trim()
        .email({ message: getMessage("email", "invalid") }),

    phone: z.string().trim().regex(CONSTANTMESSAGE.PHONE_NUM_REGEX, {
        message: CONSTANTMESSAGE.INVALID_PHONE_NUMBER,
    }),
})

export type ContactFormType = z.infer<typeof contactSchema>
