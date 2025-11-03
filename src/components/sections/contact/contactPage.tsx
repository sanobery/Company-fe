"use client"
import ContactForm from "./contactForm"
import Button from "../../common/button"
import { ColorProps, ModalProps } from "@/types/companyInterface"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, ContactFormType } from "@/schemas/contactSchema"
import ContactService from "@/services/contact/contactService"
import toast from "react-hot-toast"
import CONSTANTMESSAGE from "@/lib/constantMessage"

type ContactPageProps = ColorProps & Partial<ModalProps>

function ContactPage({ color, setShowModal }: ContactPageProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormType>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    })

    const onSubmit = async (data: ContactFormType) => {
        const payload = { data }
        try {
            const result = await ContactService.createOne(payload)
            if (result) {
                toast.success(CONSTANTMESSAGE.SUCCESS_MESSAGE)
                if (setShowModal) setShowModal(false)
                reset()
            } else {
                toast.error(CONSTANTMESSAGE.FAILED_MESSAGE)
            }
        } catch (error) {
            toast.error(
                CONSTANTMESSAGE.ERROR_MESSAGE + (error as Error).message
            )
        }
    }

    return (
        <form
            noValidate
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <ContactForm
                name="username"
                type="text"
                placeholder="Your full Username"
                color={color}
                register={register}
                error={errors.username?.message}
            />
            <ContactForm
                name="phone"
                type="tel"
                placeholder="e.g. +91 9876543210"
                color={color}
                register={register}
                error={errors.phone?.message}
            />
            <ContactForm
                name="email"
                type="email"
                placeholder="you@example.com"
                color={color}
                register={register}
                error={errors.email?.message}
            />
            <Button name="Submit" buttontype="submit" />
        </form>
    )
}

export default React.memo(ContactPage)
