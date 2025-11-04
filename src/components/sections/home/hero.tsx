"use client"
import { motion } from "framer-motion"
import { HeroProps } from "@/types/companyInterface"
import { FaMailBulk, FaMobileAlt } from "react-icons/fa"
import Button from "../../common/button"
import { useRouter } from "next/navigation"
import AnimatedItem from "../../shared/animatedItem"
import PhoneEmail from "../../common/phoneEmail"
import QuoteSection from "../../common/QuoteSection"
import LazyImage from "@/components/common/LazyImage"

export default function Hero({
    heading,
    paragraph,
    image,
    showContactPage,
    notFound,
}: HeroProps) {
    const words = heading.split(" ")
    const router = useRouter()

    return (
        <section
            aria-label="hero"
            className={`relative w-full ${showContactPage ? `h-[130vh]` : `h-[90vh]`} md:h-[80vh] overflow-hidden`}
        >
            {/* Background Image */}
            <LazyImage src={`${image}`} alt="company image" fill priority />

            {/* Animated Text Overlay */}
            <div
                className={`absolute inset-0 flex flex-col items-start justify-center w-full px-6 md:px-20 gap-6 ${
                    notFound
                        ? "bg-linear-to-br from-teal-950 to-transparent z-10"
                        : ""
                }`}
            >
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2">
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
                                    aria-label="heroHead"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <AnimatedItem
                            tag={motion.p}
                            className="text-white text-wrap text-lg md:text-xl font-medium leading-relaxed"
                        >
                            {paragraph}
                        </AnimatedItem>

                        {showContactPage && (
                            <>
                                <PhoneEmail
                                    href="#"
                                    Icon={FaMobileAlt}
                                    label="+91 7996060000"
                                />
                                <PhoneEmail
                                    href="#"
                                    Icon={FaMailBulk}
                                    label="sales@weadesign.com"
                                />
                            </>
                        )}
                        {notFound && (
                            <div className="mt-4">
                                <Button
                                    name="TO HOME"
                                    buttontype="button"
                                    notFound={true}
                                    onClick={() => router.push("/home")}
                                />
                            </div>
                        )}
                    </div>
                    {showContactPage && (
                        <QuoteSection widthClass="w-full md:w-1/2" />
                    )}
                </div>
            </div>
        </section>
    )
}
