"use client"
import ProductService from "@/services/service/service"
import { useEffect, useState } from "react"
import type { ProductProps } from "@/types/companyInterface"
import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Product() {
    const [products, setProducts] = useState<ProductProps[]>([])
    useEffect(() => {
        async function fetchData() {
            const products = await ProductService.getAll()
            setProducts(products)
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="bg-[#fff6ec] w-full px-10 py-10 text-center">
                <h1 className="text-3xl font-light font-[poppins] text-wrap leading-relaxed md:leading-loos">
                    Explore the Recent Creations of Our Residential Interior
                    Designers in Bangalore
                </h1>
                <p className="tracking-wide text-lg text-center">
                    From residential interior design in bangalore to commercial
                    spaces in Bangalore, we have the expertise to transform any
                    space into something truly extraordinary. Being the best
                    Luxury Interior designers in Bangalore, we stand out for our
                    attention to detail. From selecting the perfect color
                    palette to choosing the right fabrics and finishes, we leave
                    no stone unturned in their quest for perfection
                </p>

                <div className="flex flex-wrap justify-center">
                    {products.map(
                        ({ documentId, title, theme, price, image }, index) => {
                            const imagePath = image?.[0]?.url
                            if (!imagePath) return null

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    key={index}
                                >
                                    {" "}
                                    <Fade triggerOnce>
                                        <div className="group relative w-[362px] h-[220px] m-5 overflow-hidden rounded-lg shadow-md">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imagePath}`}
                                                alt={title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />

                                            {/* Overlay */}
                                            <Link
                                                href={`/services/${documentId}`}
                                            >
                                                <div className="absolute inset-0 bg-[#dea35c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inline-block items-center justify-center pt-10">
                                                    <p className="text-white text-lg font-semibold px-2 text-center">
                                                        Type - {title}
                                                    </p>
                                                    <p className="text-white text-lg font-semibold px-2 text-center">
                                                        Theme - {theme}
                                                    </p>
                                                    <p className="text-white text-lg font-semibold px-2 text-center">
                                                        Budget - {price}Lac
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </Fade>
                                </motion.div>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
