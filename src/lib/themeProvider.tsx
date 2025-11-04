"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * ThemeProvider
 * ------------------------------------------------------------
 * A wrapper component around the `next-themes` provider that enables
 * light and dark mode functionality across the entire application.
 *
 * Features:
 *  - Uses the `next-themes` library to manage theme switching.
 *  - Provides access to `useTheme()` hook for toggling themes.
 *  - Should wrap your app (usually in `layout.tsx` or `_app.tsx`).
 *
 * Example usage:
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *    {children}
 * </ThemeProvider>
 */
export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
