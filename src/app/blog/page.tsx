"use client"
import { BlogProps } from "@/types/companyInterface"
import { useEffect, useState } from "react"
import blogService from "@/services/blog/blogService"
import Link from "next/link"
import { useSearch } from "@/components/shared/searchContext"
import Fuse from "fuse.js"
import LazyImage from "@/components/common/LazyImage"
import { useBlogStore } from "@/store/blogStore"

export default function Blog() {
    const [teamMember, setTeamMember] = useState<BlogProps[]>([])
    const { query } = useSearch()
    const { setAllPosts } = useBlogStore()

    useEffect(() => {
        async function fetchData() {
            const data = await blogService.getAll()
            setTeamMember(data)
            setAllPosts(data)
        }
        fetchData()
    }, [])

    const fuse = new Fuse(teamMember, {
        keys: ["title", "summary"],
        threshold: 0.3,
    })

    const filteredPosts = query
        ? fuse.search(query).map((result) => result.item)
        : teamMember

    return (
        <div className="flex flex-wrap justify-center gap-2 p-2 cursor-pointer">
            {filteredPosts.map(
                ({ documentId, title, author, image }: BlogProps) => {
                    const imageUrl = image?.[0]?.url || "/default.jpg"

                    return (
                        <Link key={documentId} href={`/blog/${documentId}`}>
                            <div className="card w-80 bg-base-200 shadow-xl m-2 sm:w-[600px]">
                                <figure className="w-full h-50 overflow-hidden rounded-t-xl">
                                    <LazyImage
                                        src={`${imageUrl}`}
                                        alt={title}
                                        width={320}
                                        height={192}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <div className="card-body p-5 hover:text-red-400">
                                    <p className="mb-3 text-sm text-gray-500">
                                        {author?.name}
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
    )
}
