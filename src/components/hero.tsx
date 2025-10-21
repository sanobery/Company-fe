"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
    const heading = "LET'S CREATE YOUR DREAM INTERIOR"
    const words = heading.split(" ")
    return (
        <section className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/home.webp"
                alt="company image"
                fill
                className="object-cover"
                priority
            />

            {/* Animated Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 gap-6 max-w-3xl">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="text-white text-4xl md:text-5xl font-bold leading-tight flex flex-wrap"
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay:  0.2 }}
                    className="text-white text-lg md:text-xl font-medium leading-relaxed"
                >
                    There are many variations of the passages of Lorem Ipsum
                    available, including different versions and styles.
                </motion.p>
            </div>
        </section>
    )
}
