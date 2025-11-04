"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

/**
 * ThemeToggle Component
 * ------------------------------------------------------------
 * A button that allows users to toggle between light and dark themes.
 *
 * Features:
 *  - Uses `next-themes` to manage theme switching on the client side.
 *  - Displays both sun (light mode) and moon (dark mode) icons with smooth transitions.
 *  - Includes hover tooltip text for accessibility and clarity.
 *  - Prevents hydration mismatch using a mounted state.
 */
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    // ✅ Ensure the component only renders after client-side mount
    //    (prevents Next.js hydration errors due to SSR mismatch)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null // ✅ Prevent SSR mismatch

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative flex items-center gap-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
            aria-label="toggleTheme"
        >
            <Sun
                aria-label="sun"
                className={`h-5 w-5 transition-transform ${
                    isDark
                        ? "opacity-50 scale-90 grayscale pointer-events-none"
                        : "opacity-100 scale-110 text-yellow-500"
                }`}
            />
            <Moon
                aria-label="moon"
                className={`h-5 w-5 transition-transform ${
                    isDark
                        ? "opacity-100 scale-110 text-blue-400"
                        : "opacity-50 scale-90 grayscale pointer-events-none"
                }`}
            />
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm bg-navfootItem text-navfoot px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {isDark ? "Enable Light mode" : "Enable Dark mode"}
            </span>
        </button>
    )
}
