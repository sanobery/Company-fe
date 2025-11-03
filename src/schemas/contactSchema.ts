import CONSTANTMESSAGE, { getMessage } from "@/lib/constantMessage"
import { z } from "zod"

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

    phone: z
        .string()
        .trim()
        .regex(/^\+?[0-9]{10}$/, {
            message: CONSTANTMESSAGE.INVALID_PHONE_NUMBER,
        }),
})

export type ContactFormType = z.infer<typeof contactSchema>
