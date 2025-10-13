import Image from "next/image"
import NavItem from "./navItem"

export default function Navbar() {
    return (
        <nav className=" bg-gray-900 text-gray-400 flex md:justify-between flex-col md:flex-row min-h-15 items-center">
            <div className="logo mx-auto md:mx-0">
                <Image
                    className="dark:invert"
                    src="/images/mindfire.png"
                    alt="Company Logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    priority={false}
                />
            </div>
            <ul className="flex space-x-5 p-2.5 mx-auto md:mx-0">
                <NavItem href="/" label="Home" />
                <NavItem href="/about" label="About" />
                <NavItem href="/services" label="Services" />
                <NavItem href="/blog" label="Blog" />
                <NavItem href="/contact" label="Contact" />
            </ul>
        </nav>
    )
}
