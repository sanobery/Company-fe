// context/SearchContext.tsx
"use client"

import { createContext, useContext, useState } from "react"
import { Toaster } from "react-hot-toast"
import { SWRConfig } from "swr"

/**
 * SearchContext
 * ------------------------------------------------------------
 * Provides a global context for managing and sharing the search query
 * across multiple components within the application.
 *
 * Features:
 *  - Stores the current search input (`query`) and its updater (`setQuery`).
 *  - Wraps the app with SWRConfig to control global revalidation settings.
 *  - Includes a global <Toaster /> for showing toast notifications anywhere.
 */
const SearchContext = createContext({
    query: "",
    setQuery: (q: string) => {},
})

/**
 * SearchProvider
 * ------------------------------------------------------------
 * The provider component that wraps your application (or part of it)
 * to supply the `query` state and configuration for SWR and toast notifications.
 */
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

/**
 * useSearch
 * ------------------------------------------------------------
 * Custom hook for accessing and updating the search query
 * from any component that’s wrapped inside <SearchProvider>.
 */
export const useSearch = () => useContext(SearchContext)
