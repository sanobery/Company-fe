import Product from "@/components/home/services"
import Hero from "@/components/home/hero"
import Process from "@/components/home/process"
import Steps from "@/components/home/steps"
import Contact from "@/components/contact/ContactGaadi"
import Feedback from "@/components/home/feedback"

export default async function Home() {
    return (
        <div className="bg-[#fff6ec]">
            <Hero
                heading="LET'S CREATE YOUR DREAM INTERIOR"
                paragraph="There are many variations of the passages of Lorem Ipsum
                    available, including different versions and styles."
                image="home.webp"
                showContactPage={false}
                notFound={false}
            />
            <div className="w-full px-6 py-10">
                <Steps />
                <Contact />
            </div>
            <Process />
            <Product />
            <Feedback />
        </div>
    )
}
