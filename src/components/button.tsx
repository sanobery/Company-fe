import { ContactFormProps } from "@/types/companyInterface"

export default function Button({
    name,
    buttontype,
    onClick,
    notFound,
}: ContactFormProps) {
    return (
        <button
            type={buttontype}
            onClick={onClick}
            className={`rounded-3xl p-6 text-white font-semibold shadow-md transition ${notFound ? "transparent p-3 border-2 border-white hover:text-xl hover:bg-teal-900" : "bg-[#d3925d] hover:bg-amber-600"}`}
        >
            {name}
        </button>
    )
}
