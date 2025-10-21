"use client"
import Image from "next/image"
import { BlogProps } from "@/types/companyInterface"
import { useEffect, useState } from "react"
import blogService from "@/services/blog/blogService"
import Link from "next/link"

export default function Blog() {
    const [teamMember, setTeamMember] = useState<BlogProps[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await blogService.getAll()
            setTeamMember(data)
            console.log(data)
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-wrap justify-center gap-2 p-2 cursor-pointer">
            {teamMember.map(
                ({ documentId, title, date, author, image }: BlogProps) => {
                    const imageUrl =
                        image?.[0]?.formats?.medium?.url ||
                        image?.[0]?.url ||
                        "/default.jpg"

                    return (
                        <Link key={documentId} href={`/blog/${documentId}`}>
                            <div
                                key={documentId}
                                className="card w-80 bg-base-200 shadow-xl m-2 sm:w-[600px]"
                            >
                                <figure className="w-full h-50 overflow-hidden rounded-t-xl">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                                        alt={title}
                                        width={320}
                                        height={192}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
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
