"use client"

import useSWR from "swr"
import Hero from "@/components/home/hero"
import ContactPage from "@/components/contact/contactPage"
import blogService from "@/services/blog/blogService"
import Image from "next/image"

const fetcher = (slug: string) => {
    const data = blogService.getBySlug(slug)
    return data
}

export default function BlogSlug({ slug }: { slug: string }) {
    const { data: member, error } = useSWR(slug, fetcher, {
        refreshInterval: 300000, // every 60 seconds
        revalidateOnMount: false,
        dedupingInterval: 300000,
    })

    if (error) {
        return (
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph="Sorry, but the page you were trying to view does not exist."
                image="home2.webp"
                showContactPage={false}
                notFound={true}
            />
        )
    }

    if (!member)
        return (
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph="Sorry, but the page you were trying to view does not exist."
                image="home2.webp"
                showContactPage={false}
                notFound={true}
            />
        )

    const { title, date, author, image, content } = member
    const imageUrl =
        image?.[0]?.formats?.medium?.url || image?.[0]?.url || "/default.jpg"

    const rawDate = new Date(date)
    const month = rawDate.toLocaleString("en-US", { month: "long" })
    const day = rawDate.getDate()
    const year = rawDate.getFullYear()

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 p-6 md:p-12">
                {/* Left Section: Image */}
                <div className="relative w-full lg:w-2/3 flex justify-center md:justify-start">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                        alt={title}
                        width={700}
                        height={450}
                        className="rounded-lg object-cover w-full h-auto max-w-[900px]"
                        priority
                    />
                    <div className="absolute -bottom-5 md:-bottom-15 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-red-800/80 flex flex-col items-center justify-center text-white text-center shadow-lg md:w-[110px] md:h-[110px]">
                        <div className="text-sm font-semibold tracking-wide">
                            {month}
                        </div>
                        <div className="text-xl md:text-4xl font-bold">
                            {day}
                        </div>
                        <div className="text-sm font-medium">{year}</div>
                    </div>
                </div>

                {/* Right Section: Quote Form */}
                <div className="w-full lg:w-1/3 bg-[#0e3234] p-6 md:p-10 rounded-2xl border-4 border-[#d3925d] text-white flex flex-col justify-center">
                    <h1 className="text-[#d3925d] text-center font-[poppins] text-2xl md:text-3xl mb-6">
                        GET QUOTE NOW
                    </h1>
                    <ContactPage color="#d3925d" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="w-full lg:w-2/3 flex flex-col gap-6 bg-white rounded-xl shadow-md p-6 md:p-10">
                    <h6 className="text-3xl md:text-4xl font-bold text-red-800 leading-tight text-center">
                        {author?.name}
                    </h6>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        {title}
                    </h1>

                    <div
                        className="prose prose-lg text-gray-800 max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </>
    )
}
