"use client"
import { useEffect, useState } from "react"
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa6"
import { motion } from "framer-motion"
import { Testimonial, TestimonialsProps } from "@/types/companyInterface"

const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [visibleCount, setVisibleCount] = useState<number>(1)
    const items: Testimonial[] = testimonials ?? []
    useEffect(() => {
        const updateCount = () => {
            let count

            if (window.innerWidth < 640) {
                // mobile
                count = 1
            } else if (window.innerWidth < 1024) {
                // tablet
                count = 2
            } else {
                // desktop
                count = 3
            }
            setVisibleCount(count)
        }
        updateCount()
        window.addEventListener("resize", updateCount)
        return () => window.removeEventListener("resize", updateCount)
    }, [])

    const handleNext = () => {
        if (currentIndex + visibleCount < items?.length) {
            setCurrentIndex(currentIndex + visibleCount)
        }
    }

    const handlePrev = () => {
        if (currentIndex - visibleCount >= 0) {
            setCurrentIndex(currentIndex - visibleCount)
        }
    }
    const visibleitems = items.slice(currentIndex, currentIndex + visibleCount)

    return (
        <div className="flex flex-col w-full mx-auto px-4 py-8 bg-[#ffeed9] text-[#0e3234]">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center m-3 space-y-3">
                <h1 className="text-[clamp(24px,4vw,40px)] font-semibold">
                    Interior Design Testimonials
                </h1>
                <p className="text-[clamp(16px,2.5vw,24px)] font-medium leading-relaxed max-w-3xl">
                    Our customers share their experiences working with our
                    interior design firm in Bangalore.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {visibleitems.map(
                    (
                        { quote, name, company, rating, project, country },
                        index
                    ) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="flex flex-col justify-between bg-[#d3925d] text-white rounded-[20px] 
          hover:bg-[#0e3234] p-6 backdrop-blur-2xl transition-all duration-200 shadow-2xl 
          w-full sm:w-[90%] md:w-[45%] lg:w-[30%] h-auto min-h-[400px]"
                        >
                            <div className="h-8 w-8">
                                <FaQuoteLeft className="text-white text-3xl" />
                            </div>
                            <div className="mt-2.5 flex flex-col justify-between border-b border-[#ffffff1a] pb-6">
                                <p className="font-medium leading-relaxed">
                                    {quote}
                                </p>
                                <div className="text-end mt-4">
                                    <p className="text-sm font-bold">{name}</p>
                                    <p className="text-xs text-[#ffffff99]">
                                        {company}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <ul className="space-y-1 text-[12px] font-normal text-white">
                                    <li>⭐ Rating - {rating} / 5</li>
                                    <li>📦 Project - {project}</li>
                                    <li>🌍 Country - {country}</li>
                                </ul>
                            </div>
                        </motion.article>
                    )
                )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8">
                <div className="flex flex-row gap-3">
                    <button
                        type="button"
                        aria-label="Previous comments"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d3925d] hover:bg-[#0e3234] transition"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <FaArrowLeft className="text-white" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next comments"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d3925d] hover:bg-[#0e3234] transition"
                        onClick={handleNext}
                        disabled={currentIndex + visibleCount >= items.length}
                    >
                        <FaArrowRight className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}
