"use client"
import { useEffect, useState } from "react"
import teamService from "@/services/api/axiosInstance"
import Image from "next/image"
import { TeamMemberProps } from "@/types/companyInterface"
import Link from "next/link"

export default function Team() {
    const [teamMember, setTeamMember] = useState<TeamMemberProps[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await teamService.getAll()
            setTeamMember(data)
            console.log(data)
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-wrap justify-center gap-2 p-2">
            {teamMember.map(
                ({ documentId, name, designation, photo }: TeamMemberProps) => {
                    const imageUrl =
                        photo?.[0]?.formats?.medium?.url ||
                        photo?.[0]?.url ||
                        "/default.jpg"

                    return (
                        <div
                            key={documentId}
                            className="card w-80 bg-base-200 shadow-xl m-2"
                        >
                            <figure className="px-30 pt-10">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                                    alt={name}
                                    width={100}
                                    height={100}
                                    className="rounded-full w-24 h-24 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p className="text-sm text-gray-500">
                                    {designation}
                                </p>
                                <div className="card-actions mt-4">
                                    <Link
                                        href={`/team/${documentId}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}
