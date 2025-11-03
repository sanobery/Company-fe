import { FaTags, FaUser } from "react-icons/fa"
import { FaPenFancy } from "react-icons/fa6"
import { IconType } from "react-icons"
import StepDetail from "./stepDetail"
import CompanyHighlights from "./companyHighlights"
import { StepsProps } from "@/types/companyInterface"

export default function Steps({ data }: StepsProps) {
    if (!data) return null
    const { image, heading, paragraph, stepItem = [] } = data
    const icons: Record<string, IconType> = {
        FaTags,
        FaUser,
        FaPenFancy,
    }
    return (
        <>
            <StepDetail
                image={image?.url}
                heading={heading}
                paragraph={paragraph}
            />
            <div className="flex flex-col md:flex-row m-8 gap-5 ">
                {stepItem.map(({ icon, title, description }, index) => {
                    const Icon = icons[icon as keyof typeof icons] || FaTags
                    return (
                        <div
                            key={index}
                            className="border-2 border-[#d3925d] p-6 bg-[#fff6ec] shadow-sm rounded-lg flex-1"
                        >
                            <Icon className="text-amber-700 text-6xl mb-4" />
                            <h2 className="text-2xl font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="text-gray-800 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    )
                })}
            </div>
            <CompanyHighlights />
        </>
    )
}
