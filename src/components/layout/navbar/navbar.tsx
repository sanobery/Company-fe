"use client"
import React, { useState } from "react"
import NavItem from "./navItem"
import { FaBars } from "react-icons/fa"
import ThemeToggle from "../../shared/themeToggle"
import SearchBar from "../searchbar"
import LazyImage from "@/components/common/LazyImage"

const navItem = ["home", "services", "team", "blog", "contact"]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 col bg-navfoot flex flex-col lg:flex-row justify-between items-center px-4 py-2">
                {/* Logo */}
                <div className="flex justify-between items-center w-full lg:w-auto">
                    <LazyImage
                        src="/images/logo.png"
                        alt="Company Logo"
                        width={140}
                        height={70}
                    />
                    {/* Mobile Menu Toggle */}

                    <FaBars
                        className="cursor-pointer  text-xl lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center ml-auto mr-4">
                    <SearchBar />
                </div>

                {/* Desktop Nav */}
                <ul className="hidden h-full gap-12 lg:flex">
                    {navItem.map((value) => (
                        <NavItem
                            key={value}
                            href={`/${value}`}
                            label={
                                value.charAt(0).toUpperCase() + value.slice(1)
                            }
                        />
                    ))}
                    <li className="ml-2">
                        <ThemeToggle />
                    </li>
                </ul>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <>
                        <ul className="flex flex-col items-center gap-2 mt-2 lg:hidden">
                            {navItem.map((value) => (
                                <NavItem
                                    key={value}
                                    href={`/${value}`}
                                    label={
                                        value.charAt(0).toUpperCase() +
                                        value.slice(1)
                                    }
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            ))}
                            <li>
                                <ThemeToggle />
                            </li>
                        </ul>
                        <div className="w-full px-4 mt-2">
                            <SearchBar />
                        </div>
                    </>
                )}
            </nav>
        </>
    )
}
