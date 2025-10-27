"use client"
import { motion } from "framer-motion"

export default function Process() {
    const process = [
        "Get Free Quote",
        "Free Design consultation",
        "Book Your Design",
        "3D Visualization",
        "Project Planning",
        "Hassle free execution",
    ]

    return (
        <div className="bg-[#0e3234] text-white py-10 px-4">
            <h1 className="text-center text-4xl mb-4">OUR PROCESS</h1>
            <p className="text-center text-2xl mb-2">
                Our Luxury interior designers in Bangalore prepare the work
                schedule and give you a move-in date.
            </p>
            <p className="text-center text-2xl text-[#d3925d] mb-6">
                You just need to count the dates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {process.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        key={index}
                        className="flex flex-col items-center bg-[#134041] p-6 rounded-lg shadow-md text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold">
                            {index + 1}
                        </h1>
                        <span className="text-[#d3925d] text-xl md:text-2xl mt-3 wrap-break-words">
                            {item}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
