// context/SearchContext.tsx
"use client"
import { createContext, useContext, useState } from "react"

const SearchContext = createContext({
    query: "",
    setQuery: (q: string) => {},
})

export default function SearchProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [query, setQuery] = useState("")
    return (
        <SearchContext.Provider value={{ query, setQuery }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext)
