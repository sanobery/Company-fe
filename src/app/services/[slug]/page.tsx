// app/team/[slug]/page.tsx
import Image from "next/image"
import ProductService from "@/services/service/service"

export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {
    const member = await ProductService.getBySlug(params.slug)
    console.log(member, 19)

    if (!member) {
        return <div className="text-center p-10">Team member not found.</div>
    }

    const { documentId, title, theme, image, price,description } = member
    const imageUrl =
        image?.[0]?.formats?.medium?.url || image?.[0]?.url || "/default.jpg"

    return (
        <>
        <div className="flex flex-col md:flex-row m-3">
            <div className="w-full md:w-1/2 bg-[#fff6ec] gap-5">
                <table className="table-auto w-full">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Type</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Theme</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Location</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700">Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-amber-100">
                        <td className="px-4 py-2">{title}</td>
                        <td className="px-4 py-2">{theme}</td>
                        <td className="px-4 py-2">Bangalore</td>
                        <td className="px-4 py-2">{price} lakh</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-full md:w-1/2">
                <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                    alt={title}
                    width={1024}
                    height={585}
                    className="mt-5 rounded object-cover"
                />
                <h1 className="text-2xl font-bold mt-4">{title}</h1>
            </div>
           
        </div>
        <div className="flex flex-col md:flex-row">
            <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.[1]?.url}`}
                alt={title}
                width={720}
                height={585}
                className="mt-5 rounded object-cover"
            />
            <p className="text-gray-500">{description}</p>
        </div>
        </>
    )
}
