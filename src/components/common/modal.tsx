import { ModalProps } from "@/types/companyInterface"
import { useCallback } from "react"
import ContactPage from "../sections/contact/contactPage"

/**
 * Modal Component
 * -----------------------
 * A reusable modal overlay that displays the `ContactPage` form.
 *
 * Features:
 * - Fullscreen overlay with blurred dark background
 * - Centered responsive modal container
 * - Includes a close button (&times;) to dismiss the modal
 * - Uses `useCallback` to memoize close handler for performance
 *
 * Props:
 * - setShowModal: function (boolean) → controls modal visibility from parent
 */
export default function Modal({ setShowModal }: ModalProps) {
    /**
     * Handles closing of the modal.
     * useCallback ensures that this function is memoized
     * and not re-created unnecessarily during re-renders.
     */
    const handleClose = useCallback(() => {
        setShowModal(false)
    }, [setShowModal])

    return (
        <div className="fixed inset-0 z-999 flex justify-center items-center overflow-hidden px-4 sm:px-6 md:px-8">
            {/* Modal Container */}
            <div
                data-testid="modal"
                className="relative w-full max-w-xl bg-[url('/images/home.webp')] bg-cover bg-center backdrop-brightness-110 rounded-xl shadow-lg p-6 space-y-6 text-white bg-black/50"
            >
                <div className="absolute inset-0 bg-gray-500/50 backdrop-brightness-110 m-0 z-0 rounded-xl"></div>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-amber-400 transition"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Form Content */}
                <div className="relative z-10">
                    <ContactPage color="white" setShowModal={setShowModal} />
                </div>
            </div>
        </div>
    )
}
