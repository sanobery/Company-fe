"use client"
import { Slide } from "react-awesome-reveal"
import Button from "../../common/button"
import { useState } from "react"
import Modal from "../../common/modal"
import LazyImage from "@/components/common/LazyImage"

export default function ContactGaadi() {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="relative h-[300px] lg:h-auto w-full lg:w-2/3 bg-amber-100 overflow-hidden">
                    <LazyImage
                        src="/images/design-gaadi.webp"
                        alt="Gaddi"
                        fill
                    />
                    {/* Foreground image (slides/fades in once and stays) */}
                    <Slide direction="left" duration={1000}>
                        <div className="absolute left-0 w-full flex justify-start items-end">
                            <LazyImage
                                src="/images/gaadi.png"
                                alt="Gaadi"
                                width={1024}
                                height={1024}
                                className="object-contain"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="w-full lg:w-1/3 bg-[#0e3234] text-white font-[poppins]">
                    <h1 className="text-center p-5 font-bold text-xl md:text-4xl">
                        What’s New in Wea Interior Designers company in
                        Bangalore 2025
                    </h1>
                    <p className="text-center p-5 text-lg md:text-xl ">
                        Get free consultation from the comfort of your homes.
                        Design Gaadi is the latest endeavor by WEA Designs. This
                        convenient consultation service eliminates the hassle of
                        making a trip to our physical office. This brilliant
                        solution is specifically designed to combat the dreaded
                        traffic in Bangalore, giving our clients the ease and
                        convenience of accessing our expert luxury interior
                        designers in Bangalore.
                    </p>
                    <div className="flex justify-center items-center mb-5">
                        <Button
                            name="GET QUOTE"
                            buttontype="button"
                            onClick={() => setShowModal((prev) => !prev)}
                        />
                    </div>
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </>
    )
}
