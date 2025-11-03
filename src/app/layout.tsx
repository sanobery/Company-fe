import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/lib/themeProvider"
import Navbar from "@/components/layout/navbar/navbar"
import SearchProvider from "@/components/shared/searchContext"
import Footer from "@/components/layout/footer/footer"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
    title: "Interio",
    description: "Interior UI/UX app for home design.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <SearchProvider>
                        <Navbar />
                        <main className="relative overflow-hidden pt-[100px]">
                            {children}
                        </main>
                    </SearchProvider>
                </ThemeProvider>
                <Sidebar />
                <Footer />
            </body>
        </html>
    )
}
