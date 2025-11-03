"use client"
import {
    FaClipboardCheck,
    FaUserTie,
    FaIndustry,
    FaCubes,
    FaCalendarCheck,
} from "react-icons/fa"
import CountUp from "react-countup"

const highlights = [
    {
        id: 1000,
        suffix: "+",
        name: "Projects Delivered",
        icon: FaClipboardCheck,
    },
    { id: 45, suffix: "+", name: "Design Experts", icon: FaUserTie },
    { id: 1, suffix: "", name: "Loose Furniture Factory", icon: FaIndustry },
    { id: 1, suffix: "", name: "Modular Factory", icon: FaCubes },
    { id: 10, suffix: "+", name: "Years Experience", icon: FaCalendarCheck },
]

export default function CompanyHighlights() {
    return (
        <div className="w-full bg-[#ffeed9] py-15 px-10">
            <div className="flex flex-wrap justify-between items-center gap-y-6">
                {highlights.map(({ id, suffix, name, icon: Icon }, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center text-center flex-1 min-w-[120px] max-w-[180px]"
                    >
                        <Icon className="text-navfootContrast text-6xl mb-2 hover:scale-110 transition-transform duration-200" />
                        <div className="flex flex-col">
                            <p className="text-lg text-[#0e3234] font-bold">
                                <CountUp
                                    end={id}
                                    duration={2}
                                    enableScrollSpy
                                    scrollSpyOnce={false}
                                />
                                {suffix}
                            </p>
                            <p className="text-lg text-[#0e3234]">{name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
