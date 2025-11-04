"use client"

import { useState, useRef, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import { useSearch } from "@/lib/searchContext"
import { usePathname } from "next/navigation"
import toast from "react-hot-toast"

export default function SearchBar() {
    const { query, setQuery } = useSearch()
    const [showInput, setShowInput] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const pathname = usePathname()

    // Focus input when shown
    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus()
        }
    }, [showInput])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        // ✅ If not on /blog, show toast and do NOT update query
        if (pathname !== "/blog") {
            toast.error("Searching works only for Blogs", { duration: 2000 })
            return
        }

        // ✅ Otherwise, update search context
        setQuery(value)
    }

    return (
        <div className="relative w-full max-w-xs">
            <div className="flex w-full justify-center">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    className={`w-full pl-10 pr-4 py-2 border-2 border-[#d3925d] rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d3925d] ${
                        showInput
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                    onChange={handleChange}
                />
            </div>

            <FaSearch
                role="button"
                aria-label="searchBar"
                className="absolute right-3 top-3.5 text-navfootItem cursor-pointer"
                onClick={() => setShowInput((prev) => !prev)}
            />
        </div>
    )
}
