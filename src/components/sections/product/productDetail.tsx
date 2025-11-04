"use client"

import { ProductProps } from "@/types/companyInterface"
import StepDetail from "../home/stepDetail"
import { useState } from "react"
import TableRow from "../../common/tableRow"
import Button from "../../common/button"
import Modal from "../../common/modal"
import LazyImage from "@/components/common/LazyImage"

export default function ProductDetail({
    title,
    theme,
    image,
    price,
    description,
}: ProductProps) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const imageUrl = image?.[1]?.url || "/default.jpg"

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
                        <LazyImage
                            src={`${image?.[0]?.url}`}
                            alt={title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <StepDetail
                image={`${imageUrl}`}
                heading={title}
                paragraph={description}
            />
            {showModal && <Modal setShowModal={setShowModal} />}
        </>
    )
}
