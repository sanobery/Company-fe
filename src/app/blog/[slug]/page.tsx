// app/team/[slug]/page.tsx
import Image from "next/image"
import blogService from "@/services/blog/blogService"

export default async function BlogPage({
    params,
}: {
    params: { slug: string }
}) {
    const member = await blogService.getBySlug(params.slug)
    console.log(member, 19)

    if (!member) {
        return <div className="text-center p-10">Team member not found.</div>
    }

    const { documentId, title, date, author, image, content } = member
    const imageUrl =
        image?.[0]?.formats?.medium?.url || image?.[0]?.url || "/default.jpg"

    return (
        <div className="flex bg-amber-600 flex-col md:flex-row m-3">
            <div className="">
                <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                    alt={title}
                    width={1024}
                    height={585}
                    className="mt-5 rounded object-cover"
                />
                <h1 className="text-2xl font-bold mt-4">{title}</h1>
                <p className="text-gray-500">{content}</p>
                <p className="mt-4">{author?.name}</p>
            </div>
            <div className="bg-blue-800">sanober</div>
        </div>
    )
}
