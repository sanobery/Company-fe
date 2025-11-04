import { ContactFormProps } from "@/types/companyInterface"

/**
 * Reusable Button component
 *
 * Props:
 * - name: The text to display on the button
 * - buttontype: The button type (e.g., "button", "submit", "reset")
 * - onClick: Optional click handler function
 * - notFound: Optional boolean to toggle a transparent / bordered style
 */
export default function Button({
    name,
    buttontype,
    onClick,
    notFound,
}: ContactFormProps) {
    return (
        <button
            aria-label={name}
            type={buttontype}
            onClick={onClick}
            className={`rounded-3xl p-6 text-white font-semibold shadow-md transition ${notFound ? "transparent p-3 border-2 border-white hover:text-xl hover:bg-teal-900" : "bg-[#d3925d] hover:bg-amber-600"}`}
        >
            {name}
        </button>
    )
}
