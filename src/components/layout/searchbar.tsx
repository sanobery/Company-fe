"use client"
import { useState, useRef, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import { useSearch } from "../shared/searchContext"

export default function SearchBar() {
    const { query, setQuery } = useSearch()
    const [showInput, setShowInput] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus()
        }
    }, [query, showInput])

    return (
        <div className="relative w-full max-w-xs">
            <div className="flex w-full justify-center">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className={`w-full pl-10 pr-4 py-2 border-2 border-[#d3925d] rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d3925d] ${
                        showInput
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <FaSearch
                className="absolute right-3 top-3.5 text-navfootContrast cursor-pointer"
                onClick={() => setShowInput((prev) => !prev)}
            />
        </div>
    )
}
