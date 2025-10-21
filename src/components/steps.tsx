import Image from "next/image"
import {
    FaTags,
    FaUser,
} from "react-icons/fa"
import { FaPenFancy } from "react-icons/fa6"
import { IconType } from "react-icons"

export default function Steps() {
    const steps: [IconType, string, string][] = [
        [
            FaTags,
            "Price Match Guarantee",
            "WEA Designs, the best Luxury interior designers in Bangalore gives you the best offers in 2025 up to a 30% discount (Terms & conditions apply) with FREE Consultation. We promise the lowest quotation in the interior design market for the best quality.",
        ],
        [
            FaPenFancy,
            "Customized Design",
            "Our luxury interior designers in Bangalore treat every project as unique with 10 Years of  Warranty and we start each project with fresh eyes and ideas while reflecting the heart and soul of our clients.",
        ],
        [
            FaUser,
            "Hassel-free Experience",
            "Here, WEA Designs meets reality, and we have an unbeatable ability to guarantee a successful implementation. With 10 years of experience, our luxury  interior decorators in Bangalore guarantee a hassle-free experience for customers.",
        ],
    ]
    return (
        <>
            <section className="flex flex-col md:flex-row items-center m-10">
                <Image
                    src="/images/home1.webp"
                    alt="Missing"
                    width={600}
                    height={450}
                />
                <div className="inline-block m-5 font-[poppins] text-xl">
                    <h1 className="text-3xl tracking-wide">
                        Luxury Interior Designers Company in Bangalore with a
                        refreshing sense of Elegance!
                    </h1>
                    <p className="mt-3 tracking-wide">
                        WEA Designs Pvt Ltd, a luxury interior designers in
                        Bangalore who deliver latest interior design trends.
                        Founded in 2015, the company has handled over 1,000
                        interior design projects in the past 10 years.. They are
                        a unique design-build interior design company led by 41+
                        passionate, talented, and creative interior decorators
                        in Bangalore. Since its inception, WEA Designs has gone
                        from mile to mile covering a portfolio of bespoke home
                        interior design, commercial interior design, and
                        architectural projects making it the best interior
                        design company in Bangalore with its unique designs. As
                        luxury interior designers in Bangalore with 10 years of
                        expertise, WEA Designs takes pride in seamlessly merging
                        aesthetics with functionality. Going beyond visually
                        captivating spaces, we prioritize understanding the
                        client’s vision, ensuring each project is a personalized
                        reflection of their lifestyle.
                    </p>
                </div>
            </section>
            <div className="flex flex-col md:flex-row m-8 gap-5">
                {steps.map(([IconComponent, title, description], index) => {
                    const Icon = IconComponent
                    return (
                        <div
                            key={index}
                            className="border-2 border-[#d3925d] p-6 bg-[#fff6ec] shadow-sm rounded-lg flex-1"
                        >
                            <Icon className="text-amber-700 text-6xl mb-4" />
                            <h2 className="text-2xl font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="text-gray-800 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
