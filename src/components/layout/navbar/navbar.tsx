"use client"
import React, { useState } from "react"
import NavItem from "./navItem"
import { FaBars } from "react-icons/fa"
import ThemeToggle from "../../shared/themeToggle"
import SearchBar from "../searchbar"
import LazyImage from "@/components/common/LazyImage"
/**
 * Navbar Component
 * ------------------------------------------------------------
 * This component renders a responsive navigation bar that includes:
 *  - A company logo.
 *  - A list of navigation links (Home, Services, Team, Blog, Contact).
 *  - A theme toggle button (light/dark mode).
 *  - A search bar (visible on desktop, collapsible on mobile).
 *
 * Features:
 *  - Responsive design: adjusts between mobile and desktop views.
 *  - Mobile menu toggle controlled via a hamburger icon (`FaBars`).
 *  - Accessible labels for interactive elements.
 *  - Clean layout using Tailwind CSS utility classes.
 */

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
                        role="button"
                        className="cursor-pointer text-xl lg:hidden"
                        aria-label="mobileMenuToggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>

                {/* Desktop Nav */}
                <ul className="hidden h-full gap-12 lg:flex">
                    <li>
                        {/* Search Bar */}
                        <SearchBar />
                    </li>
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
                        <ul
                            aria-label="mobileMenu"
                            className="flex flex-col items-center gap-2 mt-2 lg:hidden"
                        >
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
                            <li>
                                <SearchBar />
                            </li>
                        </ul>
                    </>
                )}
            </nav>
        </>
    )
}
