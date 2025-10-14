import Image from "next/image"
import NavItem from "./navItem"
import SearchBar from "./searchbar"
import { FaBars } from "react-icons/fa"

const navItem = ["home", "services", "team", "blog", "contact"]

export default function Navbar() {
    return (
        <nav className=" text-gray-900 flex relative justify-between items-center max-container padding-container z-30 py-3">
            <div>
                <Image
                    className="dark:invert"
                    src="/assets/brands/logo.png"
                    alt="Company Logo"
                    width={100}
                    height={30}
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
