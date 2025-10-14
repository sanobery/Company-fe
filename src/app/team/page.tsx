"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const team = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Frontend Developer",
        image: "image1.jpg",
    },
    {
        id: 2,
        name: "James Doe",
        role: "Frontend Developer",
        image: "image2.jpg",
    },
    {
        id: 3,
        name: "Sharan Doe",
        role: "Frontend Developer",
        image: "image3.jpg",
    },
    {
        id: 4,
        name: "Eden Doe",
        role: "Frontend Developer",
        image: "image4.jpg",
    },
    {
        id: 5,
        name: "Carl Doe",
        role: "Frontend Developer",
        image: "image5.jpg",
    },
    {
        id: 6,
        name: "Gordon Doe",
        role: "Frontend Developer",
        image: "image6.webp",
    },
]

export default function Team() {
    const router = useRouter()

    return (
        <div className="flex flex-wrap justify-center gap-2 p-2">
            {team.map(({ id, name, role, image }) => (
                <div key={id} className="card w-80 bg-base-200 shadow-xl m-2">
                    <figure className="px-30 pt-10">
                        <Image
                            src={`/images/${image}`}
                            alt={name}
                            width={100}
                            height={100}
                            className="rounded-full w-24 h-24 object-cover"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className="text-sm text-gray-500">{role}</p>
                        <div className="card-actions mt-4">
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => router.push(`/team/${id}`)}
                            >
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
