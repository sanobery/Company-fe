"use client"

import Hero from "@/components/sections/home/hero"
// import Product from "@/components/sections/product/product"
import Process from "@/components/sections/home/process"
import Steps from "@/components/sections/home/steps"
import Contact from "@/components/sections/contact/ContactGaadi"
import Testimonials from "@/components/sections/home/testimonials"
import HomeService from "@/services/home/homeService"
import { useFetchData } from "@/hook/useFetchData"
import { HomePageData } from "@/types/companyInterface"
import { getMessage } from "@/lib/constantMessage"

// ✅ Fetcher function for SWR (reusable)
const fetcherHomePage = async (): Promise<HomePageData> => {
    const result = await HomeService.getAll()
    return result
}

export default function HomeClient() {
    // ✅ Use the global SWR helper
    const { data, RenderState } = useFetchData<HomePageData>({
        key: "homePageData",
        fetcher: fetcherHomePage,
    })

    // ✅ Extract individual sections safely
    const hero = data?.hero
    const stepSection = data?.stepSection
    const processSection = data?.processSection
    const testimonials = data?.testimonials

    return (
        <RenderState
            loadingText={getMessage("home", "loading")}
            errorText={getMessage("home", "failed")}
            emptyText={getMessage("home", "notfound")}
            isEmpty={!data}
        >
            <>
                <Hero
                    heading={hero?.heading ?? " "}
                    paragraph={hero?.paragraph ?? " "}
                    image={hero?.image?.url ?? "default.jpg"}
                />

                <div className="w-full px-6 py-10">
                    <Steps data={stepSection ?? null} />
                    <Contact />
                </div>

                <Process data={processSection ?? null} />
                {/* <Product type="products" /> */}
                <Testimonials testimonials={testimonials ?? null} />
            </>
        </RenderState>
    )
}
