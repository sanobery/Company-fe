import { HeroProps } from "@/types/companyInterface"
import Image from "next/image"

export default function StepDetail({ image, heading, paragraph }: HeroProps) {
    return (
        <section className="flex flex-col lg:flex-row items-center m-10">
            <Image
                src={image}
                alt="Missing"
                width={600}
                height={450}
                loading="lazy"
            />
            <div className="inline-block m-5 font-[poppins] text-xl">
                <h1 className="text-3xl tracking-wide">{heading}</h1>
                <p className="mt-3 tracking-wide">{paragraph}</p>
            </div>
        </section>
    )
}
