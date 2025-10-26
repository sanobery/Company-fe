import Image from "next/image"
import NavItem from "./navItem"
import SearchBar from "../searchbar"
import { FaBars } from "react-icons/fa"

const navItem = ["home", "services", "team", "blog", "contact"]

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0e3234] text-white flex justify-between items-center">
            <div>
                <Image
                    className="dark:invert"
                    src="/images/logo.png"
                    alt="Company Logo"
                    width={140}
                    height={70}
                    loading="lazy"
                    priority={false}
                />
            </div>
            {/* Right: Search Bar */}
            <div className="hidden md:flex items-center ml-auto mr-4">
                <SearchBar />
            </div>
            <ul className="hidden h-full gap-12 lg:flex">
                {navItem.map((value) => (
                    <NavItem
                        key={value}
                        href={`/${value}`}
                        label={value.charAt(0).toUpperCase() + value.slice(1)}
                    />
                ))}
            </ul>
            <FaBars className="cursor-pointer mr-3 lg:hidden" />
        </nav>
    )
}
