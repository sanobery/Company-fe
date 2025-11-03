"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"

import ProductService from "@/services/service/service"
import teamService from "@/services/api/axiosInstance"
import type {
    ProductComponentProps,
    ProductProps,
    TeamMemberProps,
} from "@/types/companyInterface"
import ProductMeta from "./productMeta"
import AnimatedItem from "../../shared/animatedItem"
import LazyImage from "@/components/common/LazyImage"

export default function Product({ type }: ProductComponentProps) {
    const [data, setData] = useState<(ProductProps | TeamMemberProps)[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const result =
                    type === "products"
                        ? await ProductService.getAll()
                        : await teamService.getAll()
                setData(result)
            } catch (error) {
                console.error(`Error fetching ${type}:`, error)
            }
        }
        fetchData()
    }, [type])

    return (
        <div className="bg-[#fff6ec] w-full px-10 py-10 text-center">
            {type == "products" && (
                <>
                    <h1 className="text-3xl font-light font-[poppins] text-wrap leading-relaxed md:leading-loos">
                        Explore the Recent Creations of Our Residential Interior
                        Designers in Bangalore
                    </h1>
                    <p className="tracking-wide text-lg text-center">
                        From residential interior design in bangalore to
                        commercial spaces in Bangalore, we have the expertise to
                        transform any space into something truly extraordinary.
                        Being the best Luxury Interior designers in Bangalore,
                        we stand out for our attention to detail. From selecting
                        the perfect color palette to choosing the right fabrics
                        and finishes, we leave no stone unturned in their quest
                        for perfection
                    </p>
                </>
            )}
            {type == "team" && (
                <article className="bg-[#dea35c] w-full px-10 py-10 text-white">
                    <h1 className="text-3xl font-light font-[poppins] text-wrap leading-relaxed md:leading-loos">
                        Meet Our Team of Innovative Interior Designers in JP
                        Nagar, Bangalore
                    </h1>
                    <p className="tracking-wide text-lg text-center">
                        Meet our creative team of dedicated interior designers
                        in JP Nagar. Our designers utilize a unique blend of
                        creativity and proficiency to create individualized
                        environments that satisfy your economical and
                        architectural requirements. They bring new insights to
                        every project they work on. We place a high value on
                        teamwork and careful attention to detail throughout the
                        whole design process, guaranteeing a smooth, customized
                        design experience. Our team is dedicated to working
                        above and beyond your expectations and creating spaces
                        that inspire, whether your style is modern simple
                        design, classic style, or ethnic appeal.
                    </p>
                </article>
            )}
            <div className="flex flex-wrap justify-center">
                {data.map((item, index) => {
                    const imagePath = (item as { image?: { url: string }[] })
                        ?.image?.[0]?.url
                    if (!imagePath) return null

                    return (
                        <AnimatedItem
                            tag={motion.div}
                            key={index}
                            index={index}
                        >
                            <Fade triggerOnce>
                                <div className="group relative w-[362px] h-[220px] m-5 overflow-hidden rounded-lg shadow-md">
                                    <LazyImage
                                        src={imagePath}
                                        alt={
                                            type === "products"
                                                ? (item as ProductProps).title
                                                : (item as TeamMemberProps).name
                                        }
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 362px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <Link
                                        href={
                                            type === "products"
                                                ? `/services/${
                                                      (item as ProductProps)
                                                          .documentId
                                                  }`
                                                : `/team/${
                                                      (item as TeamMemberProps)
                                                          .id
                                                  }`
                                        }
                                    >
                                        <div className="transparency inset-0 bg-[#dea35c]/60 flex flex-col items-center justify-center">
                                            {type === "products" ? (
                                                <>
                                                    <ProductMeta
                                                        label="Type"
                                                        value={
                                                            (
                                                                item as ProductProps
                                                            ).title
                                                        }
                                                    />
                                                    <ProductMeta
                                                        label="Theme"
                                                        value={
                                                            (
                                                                item as ProductProps
                                                            ).theme
                                                        }
                                                    />
                                                    <ProductMeta
                                                        label="Budget"
                                                        value={
                                                            (
                                                                item as ProductProps
                                                            ).price
                                                        }
                                                    />
                                                </>
                                            ) : (
                                                <ProductMeta
                                                    label="Name"
                                                    value={
                                                        (
                                                            item as TeamMemberProps
                                                        ).name
                                                    }
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            </Fade>
                        </AnimatedItem>
                    )
                })}
            </div>
        </div>
    )
}
