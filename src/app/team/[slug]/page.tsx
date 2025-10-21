// app/team/[slug]/page.tsx
import Image from "next/image"
import teamService from "@/services/api/axiosInstance"

export default async function TeamMemberPage({
    params,
}: {
    params: { slug: string }
}) {
    const member = await teamService.getBySlug(params.slug)
    if (!member) {
        return <div className="text-center p-10">Team member not found.</div>
    }

    const { name, designation, bio, photo } = member
    const imageUrl =
        photo?.[0]?.formats?.medium?.url || photo?.[0]?.url || "/default.jpg"

    return (
        <div className="max-w-xl mx-auto p-6 text-center">
            <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                alt={name}
                width={150}
                height={150}
                className="rounded-full mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold mt-4">{name}</h1>
            <p className="text-gray-500">{designation}</p>
            <p className="mt-4">{bio}</p>
        </div>
    )
}
