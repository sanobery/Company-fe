import ContactForm from "./contactForm"
import Button from "../button"
import { ColorProps } from "@/types/companyInterface"
import React from "react"

function ContactPage({ color }: ColorProps) {
    return (
        <form className="space-y-6">
            <ContactForm
                name="name"
                type="text"
                placeholder="Your full name"
                color={color}
            />
            <ContactForm
                name="phone"
                type="tel"
                placeholder="e.g. +91 9876543210"
                color={color}
            />
            <ContactForm
                name="email"
                type="email"
                placeholder="you@example.com"
                color={color}
            />
            <Button name="Submit" buttontype="submit" />
        </form>
    )
}

export default React.memo(ContactPage)
