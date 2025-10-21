"use client"
import { useState, useRef, useEffect } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus()
        }
    }, [showInput])

    return (
        <div className="relative w-full max-w-xs">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className={`w-full pl-10 pr-4 py-2 border-2 border-[#d3925d] rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d3925d] ${
                    showInput ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />
            <FaSearch
                className="absolute right-3 top-3.5 text-[#d3925d] cursor-pointer"
                onClick={() => setShowInput((prev) => !prev)}
            />
        </div>
    )
}
