"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"
import type {
    ProductComponentProps,
    ProductProps,
    TeamMemberProps,
} from "@/types/companyInterface"
import ProductMeta from "./productMeta"
import AnimatedItem from "../../shared/animatedItem"
import LazyImage from "@/components/common/LazyImage"

/**
 * Product Component
 * -----------------
 * Dynamically displays either Products or Team Members depending on the `type` prop.
 * Fetches data via SWR for caching and revalidation efficiency.
 * Each item includes hover animation, image, and metadata.
 */
export default function Product({ type, data }: ProductComponentProps) {
    return (
        <div className="bg-[#fff6ec] w-full px-10 py-10 text-center">
            {/* ---------- Header Section ---------- */}
            {type === "products" && (
                <>
                    <h1
                        aria-label="productHead"
                        className="text-3xl font-light font-[poppins] text-wrap leading-relaxed"
                    >
                        Explore the Recent Creations of Our Residential Interior
                        Designers in Bangalore
                    </h1>
                    <p className="tracking-wide text-lg text-center">
                        From residential interior design in Bangalore to
                        commercial spaces, we transform any area into something
                        extraordinary. Being among the best luxury interior
                        designers, we focus on every detail — from selecting the
                        right color palette to choosing perfect finishes.
                    </p>
                </>
            )}

            {type === "team" && (
                <article className="bg-[#dea35c] w-full px-10 py-10 text-white">
                    <h1 className="text-3xl font-light font-[poppins] text-wrap leading-relaxed">
                        Meet Our Team of Innovative Interior Designers in JP
                        Nagar, Bangalore
                    </h1>
                    <p className="tracking-wide text-lg text-center">
                        Meet our creative team of interior designers in JP Nagar
                        — dedicated professionals who bring new insights and
                        passion to every project. With teamwork and attention to
                        detail, we deliver spaces that inspire and elevate.
                    </p>
                </article>
            )}

            {/* ---------- Data Grid Section ---------- */}
            <div className="flex flex-wrap justify-center">
                {data.map((item, index: number) => {
                    const imagePath = (item as { image?: { url: string }[] })
                        ?.image?.[0]?.url
                    if (!imagePath) return null
                    // console.log(item.name, 121)
                    return (
                        <AnimatedItem
                            tag={motion.div}
                            key={index}
                            index={index}
                        >
                            <Fade triggerOnce>
                                <div className="group relative w-[362px] h-[220px] m-5 overflow-hidden rounded-lg shadow-md">
                                    {/* Item Image */}
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

                                    {/* Hover Overlay with Metadata */}
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
                                        <div className="absolute inset-0 bg-[#dea35c]/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
