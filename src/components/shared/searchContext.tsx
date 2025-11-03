// context/SearchContext.tsx
"use client"
import { createContext, useContext, useState } from "react"
import { Toaster } from "react-hot-toast"
import { SWRConfig } from "swr"

const SearchContext = createContext({
    query: "",
    setQuery: (q: string) => {},
})

export default function SearchProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [query, setQuery] = useState<string>("")

    return (
        <SearchContext.Provider value={{ query, setQuery }}>
            <SWRConfig
                value={{
                    revalidateOnFocus: false,
                    revalidateIfStale: false,
                    revalidateOnReconnect: false,
                }}
            >
                {children}
            </SWRConfig>

            <Toaster position="top-center" reverseOrder={false} />
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext)
