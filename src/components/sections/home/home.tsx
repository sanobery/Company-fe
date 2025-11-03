"use client"

import useSWR from "swr"
import HomeService from "@/services/home/homeService"
import Hero from "@/components/sections/home/hero"
import Product from "@/components/sections/product/product"
import Process from "@/components/sections/home/process"
import Steps from "@/components/sections/home/steps"
import Contact from "@/components/sections/contact/ContactGaadi"
import Testimonials from "@/components/sections/home/testimonials"

// ✅ SWR fetcher using your Axios service
const fetcher = async () => {
    console.log("➡️ Fetching from API (HomeService.getAll)")
    const result = await HomeService.getAll()
    return result
}

export default function HomeClient() {
    const { data, isLoading } = useSWR("homePageData", fetcher, {
        revalidateOnFocus: false, // Optional: prevent refetching on tab switch
    })

    // ✅ Important: Avoid flicker if fallbackData exists
    if (!data && isLoading) return <p>Loading homepage...</p>

    const hero = data?.hero
    const stepSection = data?.stepSection
    const processSection = data?.processSection
    const testimonials = data?.testimonials

    return (
        <>
            <Hero
                heading={hero?.heading}
                paragraph={hero?.paragraph}
                image={hero?.image?.url}
            />

            <div className="w-full px-6 py-10">
                <Steps data={stepSection} />
                <Contact />
            </div>

            <Process data={processSection} />
            <Product type="products" />
            <Testimonials testimonials={testimonials} />
        </>
    )
}
