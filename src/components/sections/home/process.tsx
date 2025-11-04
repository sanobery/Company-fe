"use client"
import { ProcessProps } from "@/types/companyInterface"
import { motion } from "framer-motion"
import AnimatedItem from "../../shared/animatedItem"

export default function Process({ data }: ProcessProps) {
    if (!data) return null // Safety: No data, no render

    const { heading, para1, para2, Steps = [] } = data

    return (
        <div className="bg-navfootContrast text-white py-10 px-4">
            {heading && (
                <h1 className="text-center text-4xl mb-4">{heading}</h1>
            )}
            {para1 && <p className="text-center text-2xl mb-2">{para1}</p>}
            {para2 && (
                <p className="text-center text-2xl text-navfootItem mb-6">
                    {para2}
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Steps.map((step, index) => (
                    <AnimatedItem
                        tag={motion.div}
                        key={index}
                        index={index}
                        className="flex flex-col items-center bg-navfootItem p-6 rounded-lg shadow-md text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold">
                            {index + 1}
                        </h1>
                        <span className="text-navfootContrast text-xl md:text-2xl mt-3 wrap-break-words">
                            {step.title}
                        </span>
                    </AnimatedItem>
                ))}
            </div>
        </div>
    )
}
