import { QuoteSectionProps } from "@/types/companyInterface"
import ContactPage from "../sections/contact/contactPage"

/**
 * QuoteSection Component
 * ---------------------------------
 * Displays a "Get Quote" form section with a customizable
 * title, color theme, and width.
 *
 * Props (from QuoteSectionProps):
 * - color: string → accent color used for the border and heading (default: "#d3925d")
 * - title: string → title text shown above the form (default: "GET QUOTE NOW")
 * - widthClass: string → Tailwind class controlling component width (default: "w-full md:w-1/2")
 *
 * Usage:
 * <QuoteSection
 *   color="#ff9900"
 *   title="Request a Free Quote"
 *   widthClass="w-full lg:w-1/3"
 * />
 */
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
