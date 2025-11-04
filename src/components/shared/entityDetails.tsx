"use client"

import blogService from "@/services/blog/blogService"
import {
    BlogProps,
    EntityDetailsProps,
    TeamMemberProps,
} from "@/types/companyInterface"
import Hero from "../sections/home/hero"
import useSWR from "swr"
import QuoteSection from "../common/QuoteSection"
import LazyImage from "../common/LazyImage"
import { useBlogStore } from "@/store/blogStore"
import { useEffect } from "react"
import AnimatedItem from "./animatedItem"
import { motion } from "framer-motion"
import Link from "next/link"
import teamService from "@/services/team/teamService"

/**
 * Shared async fetcher used by SWR for data retrieval.
 * Dynamically determines whether to fetch a blog or team member entity
 * based on the `type` parameter.
 */
const fetchEntity = async (type: "blog" | "team", slug: string) => {
    if (type === "blog") {
        return await blogService.getBySlug(slug)
    } else {
        return await teamService.getById(Number(slug))
    }
}

/**
 * EntityDetails Component
 * ------------------------------------------------------------
 * Dynamically renders details for either:
 *   - A Blog post
 *   - A Team Member profile
 *
 * Features:
 *  - Uses SWR for efficient client-side caching & revalidation.
 *  - Displays an image, content, and related blog posts.
 *  - Falls back to a “Not Found” hero section when data is missing.
 *  - Includes a responsive layout with a quote form on the side.
 *
 * Props (EntityDetailsProps):
 *  - type: "blog" | "team" → Determines which type of entity to fetch.
 *  - slug: string → The unique identifier (slug or ID) for the entity.
 */
export default function EntityDetails({ type, slug }: EntityDetailsProps) {
    const cacheKey = `${type}-${slug}`
    const { allPosts, setAllPosts } = useBlogStore()

    // Fetch all posts if not already loaded (for the "Related Posts" section)
    useEffect(() => {
        if (allPosts.length === 0) {
            blogService.getAll().then(setAllPosts)
        }
    }, [])

    /**
     * SWR handles data fetching and caching logic
     * - Avoids refetching when switching tabs or reconnecting
     * - Keeps previously loaded data for a smoother UX
     */
    const { data, error, isLoading } = useSWR(
        cacheKey,
        () => fetchEntity(type, slug),
        {
            revalidateOnMount: false,
            revalidateOnFocus: false, // no refetch on tab focus
            revalidateOnReconnect: false, // no refetch on reconnect
            dedupingInterval: 1 * 60 * 1000, // cache for 5 minutes
            keepPreviousData: true, // keep old data during revalidation
        }
    )
    if (isLoading) return <div className="text-center p-6">Loading...</div>
    if (error)
        return (
            <div className="text-center p-6 text-red-500">
                Failed to load {type}
            </div>
        )

    if (!data)
        return (
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph="Sorry, but the page you were trying to view does not exist."
                image="/images/home2.webp"
                showContactPage={false}
                notFound={true}
            />
        )

    const imageUrl =
        (data as { image?: { url: string }[] })?.image?.[0]?.url ||
        "/default.jpg"
    const date = type === "blog" ? (data as BlogProps).date : new Date()
    const rawDate = new Date(date)
    const month = rawDate.toLocaleString("en-US", { month: "long" })
    const day = rawDate.getDate()
    const year = rawDate.getFullYear()
    const title =
        type === "blog"
            ? (data as BlogProps).title
            : (data as TeamMemberProps).designation

    const name =
        type === "blog"
            ? (data as BlogProps).author?.name
            : (data as TeamMemberProps).name

    const content =
        type === "blog"
            ? (data as BlogProps).content
            : (data as TeamMemberProps).bio
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-6 p-6 md:p-12">
                {/* Left Section: Image */}
                <div className="relative w-full lg:w-2/3 flex justify-center md:justify-start">
                    <LazyImage
                        src={`${imageUrl}`}
                        alt={title}
                        width={700}
                        height={450}
                        className="rounded-lg object-cover w-full h-auto max-w-[900px]"
                    />
                    {type === "blog" && (
                        <div className="absolute -bottom-5 md:-bottom-15 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-red-800/80 flex flex-col items-center justify-center text-white text-center shadow-lg md:w-[110px] md:h-[110px]">
                            <div className="text-sm font-semibold tracking-wide">
                                {month}
                            </div>
                            <div className="text-xl md:text-4xl font-bold">
                                {day}
                            </div>
                            <div className="text-sm font-medium">{year}</div>
                        </div>
                    )}
                </div>

                {/* Right Section: Quote Form */}
                <QuoteSection widthClass="w-full lg:w-1/3" />
            </div>
            {/* Content Section */}
            <div className="container mx-auto px-2 py-4 flex flex-col md:flex-row gap-2">
                <div className="w-full lg:w-2/3 flex flex-col bg-[#f1efd7] rounded-xl shadow-md p-6 md:p-10">
                    <h6 className="text-3xl md:text-4xl font-bold text-red-800 leading-tight text-center">
                        {name}
                    </h6>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        {title}
                    </h1>

                    <div
                        className="prose prose-lg text-gray-800 max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
                {type === "blog" && (
                    <div className="w-full lg:w-1/3 bg-[#f1efd7] rounded-xl shadow-md">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-800 leading-tight text-center mt-10">
                            Related Posts
                        </h1>
                        {allPosts.map(({ documentId, image, title }, index) => {
                            const imageUrl = image?.[0]?.url
                            return (
                                <AnimatedItem
                                    tag={motion.div}
                                    key={index}
                                    index={index}
                                >
                                    <div className="m-12 bg-navfootContrast p-3 rounded">
                                        <Link href={`/blog/${documentId}`}>
                                            <LazyImage
                                                src={`${imageUrl}`}
                                                alt={title}
                                                width={320}
                                                height={192}
                                            />
                                            <h1 className="text-xl md:text-2xl font-bold text-navfootItem leading-tight">
                                                {title}
                                            </h1>
                                        </Link>
                                    </div>
                                </AnimatedItem>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}
