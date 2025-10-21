import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { FooterDetailProps } from "@/types/companyInterface"

export default function FooterDetail({ label, items }: FooterDetailProps) {
    return (
        <div className="flex flex-col items-start flex-1">
            <h3 className="text-xl font-semibold mb-2">{label}</h3>
            <ul className="flex flex-col gap-2">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className=" pb-2 cursor-pointer hover:font-bold transition-all"
                    >
                        <button className="flex w-full items-center justify-between text-left">
                            <span>{item}</span>
                            <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
