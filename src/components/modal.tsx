import { ModalProps } from "@/types/companyInterface"
import ContactPage from "./contact/contactPage"
import { useCallback } from "react"

export default function Modal({ setShowModal }: ModalProps) {
    const handleSubmit = useCallback(() => {
        setShowModal(false)
    }, [])

    return (
        <div className="fixed inset-0 z-999 flex justify-center items-center overflow-hidden">
            {/* Modal Container */}
            <div className="relative w-full max-w-xl bg-[url('/images/home.webp')] bg-cover bg-center backdrop-brightness-110 rounded-xl shadow-lg p-6 space-y-6 text-white bg-black/50">
                <div className="absolute inset-0 bg-gray-500/50 backdrop-brightness-110 m-0 z-0 rounded-xl"></div>

                {/* Close Button */}
                <button
                    onClick={handleSubmit}
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-amber-400 transition"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Form Content */}
                <div className="relative z-10">
                    <ContactPage color="white" />
                </div>
            </div>
        </div>
    )
}
