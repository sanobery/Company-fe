"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export default function Feedback() {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [visibleCount, setVisibleCount] = useState<number>(1)
    const client = [
        {
            quote: " I am thrilled with Interno work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
            name: "JEET OBERAI",
            company: "(Entrepreneur), PayLoan",
            rating: 4.8,
            project: "Product Development",
            country: "Singapore",
        },
        {
            quote: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
            name: "MARC DORON",
            company: "CTO, MasterStudy",
            rating: 5,
            project: "Product Development",
            country: "US",
        },
        {
            quote: " I am thrilled with Interno work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
            name: "JEET OBERAI",
            company: "(Entrepreneur), PayLoan",
            rating: 4.8,
            project: "Product Development",
            country: "Singapore",
        },
        {
            quote: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
            name: "MARC DORON",
            company: "CTO, MasterStudy",
            rating: 5,
            project: "Product Development",
            country: "US",
        },
        {
            quote: " I am thrilled with Interno work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
            name: "JEET OBERAI",
            company: "(Entrepreneur), PayLoan",
            rating: 4.8,
            project: "Product Development",
            country: "Singapore",
        },
        {
            quote: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
            name: "MARC DORON",
            company: "CTO, MasterStudy",
            rating: 5,
            project: "Product Development",
            country: "US",
        },
        {
            quote: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
            name: "SANOBER DORON",
            company: "CTO, MasterStudy",
            rating: 5,
            project: "Product Development",
            country: "US",
        },
    ]

    useEffect(() => {
        const updateCount = () => {
            const count = window.innerWidth < 768 ? 1 : 3
            setVisibleCount(count)
        }
        updateCount()
        window.addEventListener("resize", updateCount)
        return () => window.removeEventListener("resize", updateCount)
    }, [])

    const handleNext = () => {
        if (currentIndex + visibleCount < client.length) {
            setCurrentIndex(currentIndex + visibleCount)
        }
    }

    const handlePrev = () => {
        if (currentIndex - visibleCount >= 0) {
            setCurrentIndex(currentIndex - visibleCount)
        }
    }
    const visibleClients = client.slice(
        currentIndex,
        currentIndex + visibleCount
    )

    return (
        <div className="min-w-screen mx-auto px-4 py-8 bg-[#ffeed9] text-[#0e3234]">
            <div className="flex flex-col items-center m-3">
                <h1 className="text-nowrap text-[clamp(30px,5vw,40px)] font-semibold">
                    Interior Design Client Testimonial
                </h1>
                <p className="text-nowrap text-[clamp(20px,5vw,30px)] font-semibold">
                    Our customer reviews on their experiences with our interior
                    designers Firm in Bangalore
                </p>
            </div>
            <div className="flex flex-col md:flex-row">
                {visibleClients.map(
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
                            transition={{ duration: 5 }}
                            className="h-[450px] bg-[#d3925d] text-white w-[clamp(310px,47.15vw,400px)] rounded-[20px] hover:bg-[#0e3234] p-6 backdrop-blur-2xl transition-all duration-200 mx-5 shadow-2xl"
                        >
                            <div className="h-8 w-8">
                                <FaQuoteLeft className="text-white text-3xl" />
                            </div>
                            <div className="mt-2.5 flex h-[282px] flex-col justify-between border-b border-[#ffffff1a] pb-6">
                                <p className="min-h-48 font-medium">{quote}</p>
                                <div className="text-end">
                                    <p className="text-sm font-bold">{name}</p>
                                    <p className="text-xs text-[#ffffff99]">
                                        {company}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex h-[54px] items-center justify-between">
                                <ul className="space-y-1 text-[12px] font-normal text-white">
                                    <li>Star Rating - {rating} / 5</li>
                                    <li>Project - {project}</li>
                                    <li>Country - {country}</li>
                                </ul>
                            </div>
                        </motion.article>
                    )
                )}
            </div>
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                <div className="flex flex-row">
                    <button
                        type="button"
                        aria-label="Previous comments"
                        className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#d3925d]"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <FaArrowLeft className="text-white" />
                    </button>
                    <button
                        type="button"
                        aria-label="Previous comments"
                        className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#d3925d]"
                        onClick={handleNext}
                        disabled={currentIndex + visibleCount >= client.length}
                    >
                        <FaArrowRight className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}
