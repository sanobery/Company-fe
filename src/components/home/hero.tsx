"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { HeroProps } from "@/types/companyInterface"
import { FaMailBulk, FaMobileAlt } from "react-icons/fa"
import PhoneEmail from "../phoneEmail"
import ContactPage from "../contact/contactPage"
import Button from "../button"
import { useRouter } from "next/navigation"
import QuoteSection from "../QuoteSection"

export default function Hero({
    heading,
    paragraph,
    image,
    showContactPage,
    notFound,
}: HeroProps) {
    // const heading = "LET'S CREATE YOUR DREAM INTERIOR"
    const words = heading.split(" ")
    const router = useRouter()

    return (
        <section className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
            {/* Background Image */}
            <Image
                src={`/images/${image}`}
                alt="company image"
                fill
                className="object-cover"
                priority
            />

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
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white text-wrap text-lg md:text-xl font-medium leading-relaxed"
                        >
                            {paragraph}
                        </motion.p>

                        {showContactPage && (
                            <>
                                <PhoneEmail
                                    Icon={FaMobileAlt}
                                    label="+91 7996060000"
                                />
                                <PhoneEmail
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
                        <QuoteSection widthClass="w-full lg:w-1/3" />
                        // <div className="text-white w-full md:w-1/2 bg-[#0e3234] p-10 rounded-2xl border-4 border-[#d3925d]">
                        //     <h1 className="text-[#d3925d] text-center font-[poppins] text-2xl md:text-xl">
                        //         GET QUOTE NOW
                        //     </h1>
                        //     <ContactPage color="#d3925d" />
                        // </div>
                    )}
                </div>
            </div>
        </section>
    )
}
