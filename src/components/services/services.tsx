"use client"

import { ProductProps } from "@/types/companyInterface"
import TableRow from "@/components/tableRow"
import Button from "@/components/button"
import Image from "next/image"
import StepDetail from "../stepDetail"
import { useState } from "react"
import Modal from "../modal"

export default function Services({
    title,
    theme,
    image,
    price,
    description,
}: ProductProps) {
    const [showModal, setShowModal] = useState<boolean>(false)
    console.log(image, 19)
    const imageUrl =
        image?.[1]?.formats?.medium?.url || image?.[1]?.url || "/default.jpg"
    const path = `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`

    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-12 bg-white">
                {/* Left Section: Info Table */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                        {title}
                    </h1>
                    <div className="bg-gray-100 rounded-lg shadow-md p-6">
                        <table className="table-auto w-full text-base md:text-lg">
                            <tbody>
                                <TableRow name="Type" type={title} />
                                <TableRow name="Theme" type={theme} />
                                <TableRow name="Location" type="Bangalore" />
                                <TableRow
                                    name="Budget"
                                    type={`${price} lakh`}
                                />
                            </tbody>
                        </table>
                    </div>
                    <div className="m-10">
                        <Button
                            name="Contact Now"
                            buttontype="button"
                            onClick={() => setShowModal((prev) => !prev)}
                        />
                    </div>
                </div>
                {/* Right Section: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="w-full h-[300px] md:h-[400px] bg-amber-200 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.[0]?.url}`}
                            alt={title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <StepDetail image={path} heading={title} paragraph={description} />
            {showModal && <Modal setShowModal={setShowModal} />}
        </>
    )
}
