import { useState, useRef } from "react"
import { FaSearch } from "react-icons/fa"

export default function ResponsiveSearchBar() {
    const [showInput, setShowInput] = useState(false)
    const [query, setQuery] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <div className="flex justify-center items-center w-full">
            {/* Search container */}
            <div
                className={`relative flex items-center border-2 border-navfootContrast rounded-full transition-all duration-500 bg-white overflow-hidden
          ${showInput ? "w-[80vw] sm:w-[300px] md:w-[400px]" : "w-12"}
        `}
            >
                {/* Input field */}
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    className={`pl-4 pr-10 py-2 w-full text-gray-700 rounded-full focus:outline-none transition-all duration-300
            ${showInput ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
                />

                {/* Search Icon */}
                <FaSearch
                    role="button"
                    aria-label="searchBar"
                    className="absolute right-3 text-navfootItem text-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => {
                        setShowInput((prev) => !prev)
                        setTimeout(() => {
                            if (!showInput) inputRef.current?.focus()
                        }, 200)
                    }}
                />
            </div>
        </div>
    )
}
