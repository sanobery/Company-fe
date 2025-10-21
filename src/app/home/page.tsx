"use client"
import Product from "@/components/product"
import Hero from "@/components/hero"
import Process from "@/components/process"
import Steps from "@/components/steps"

export default function Home() {
    return (
        <>
            <div className="w-full px-6 py-10">
                <Hero />
                <Steps />
            </div>
            <Process />
            <Product />
        </>
    )
}
