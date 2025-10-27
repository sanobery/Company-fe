// components/QuoteSection.tsx
import ContactPage from "./contact/contactPage"

interface QuoteSectionProps {
    color?: string
    title?: string
    widthClass?: string // optional override for width (e.g., "md:w-1/2")
}

export default function QuoteSection({
    color = "#d3925d",
    title = "GET QUOTE NOW",
    widthClass = "w-full md:w-1/2",
}: QuoteSectionProps) {
    return (
        <div
            className={`${widthClass} bg-[#0e3234] p-6 md:p-10 rounded-2xl border-4 border-[${color}] text-white flex flex-col justify-center`}
        >
            <h1
                className={`text-[${color}] text-center font-[poppins] text-2xl md:text-3xl mb-6`}
            >
                {title}
            </h1>
            <ContactPage color={color} />
        </div>
    )
}
