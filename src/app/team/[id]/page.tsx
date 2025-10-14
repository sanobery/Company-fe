// app/team/[id]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"

const team = {
    1: ["Jane Doe", "Frontend Developer", "image1.jpg"],
    2: ["James Doe", "Frontend Developer", "image2.jpg"],
    3: ["Sharan Doe", "Frontend Developer", "image3.jpg"],
    4: ["Eden Doe", "Frontend Developer", "image4.jpg"],
    5: ["Carl Doe", "Frontend Developer", "image5.jpg"],
    6: ["Gordon Doe", "Frontend Developer", "image6.webp"],
}

export default function TeamMember({ params }: { params: { id: number } }) {
    const member = team[params.id as keyof typeof team]

    if (!member) return notFound()

    const [name, role, image] = member

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <Image
                src={`/images/${image}`}
                alt={name}
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{role}</p>
        </div>
    )
}
