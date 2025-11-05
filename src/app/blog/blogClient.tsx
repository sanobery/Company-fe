"use client"

import { BlogProps } from "@/types/companyInterface"
import { useEffect, useMemo } from "react"
import blogService from "@/services/blog/blogService"
import Link from "next/link"
import { useSearch } from "@/lib/searchContext"
import Fuse from "fuse.js"
import LazyImage from "@/components/common/LazyImage"
import { useBlogStore } from "@/store/blogStore"
import { useFetchData } from "@/hook/useFetchData"
import { getMessage } from "@/lib/constantMessage"

/**
 * Fetch all blogs from the API.
 * @async
 * @function fetchBlogs
 * @returns {Promise<BlogProps[]>} A promise that resolves to an array of blogs.
 */
const fetchBlogs = async (): Promise<BlogProps[]> => {
    const data = await blogService.getAll()
    return data
}

export default function BlogClient() {
    const { query } = useSearch()
    const { setAllPosts } = useBlogStore()

    const { data: blogs, RenderState } = useFetchData<BlogProps[]>({
        key: "blogs",
        fetcher: fetchBlogs,
    })

    // Store in Zustand when data updates
    useEffect(() => {
        if (blogs) setAllPosts(blogs)
    }, [blogs, setAllPosts])

    const fuse = useMemo(() => {
        return new Fuse(blogs || [], {
            keys: ["title", "summary"],
            threshold: 0.3,
        })
    }, [blogs])

    const filteredPosts = query
        ? fuse.search(query).map((result) => result.item)
        : blogs || []

    return (
        <RenderState
            loadingText={getMessage("blogs", "loading")}
            errorText={getMessage("blogs", "failed")}
            emptyText={getMessage("blogs", "notfound")}
            isEmpty={filteredPosts.length === 0}
        >
            <div className="flex flex-wrap justify-center gap-4 p-4 cursor-pointer">
                {filteredPosts.map(
                    ({ documentId, title, author, image }: BlogProps) => {
                        const imageUrl = image?.[0]?.url || "/default.jpg"

                        return (
                            <Link key={documentId} href={`/blog/${documentId}`}>
                                <div className="card w-80 bg-base-200 shadow-xl m-2 sm:w-[600px] hover:shadow-2xl transition-shadow duration-300">
                                    <figure className="w-full h-50 overflow-hidden rounded-t-xl">
                                        <LazyImage
                                            src={imageUrl}
                                            alt={title}
                                            width={320}
                                            height={192}
                                            className="w-full h-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body p-5 hover:text-red-400">
                                        <p className="mb-3 text-sm text-gray-500">
                                            {author?.name || "Unknown Author"}
                                        </p>
                                        <h1 className="card-title font-serif text-2xl line-clamp-2">
                                            {title}
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                )}
            </div>
        </RenderState>
    )
}
