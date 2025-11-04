import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/lib/themeProvider"
import Navbar from "@/components/layout/navbar/navbar"
import SearchProvider from "@/lib/searchContext"
import Footer from "@/components/layout/footer/footer"
import Sidebar from "@/components/layout/sidebar"
import HomeService from "@/services/home/homeService"

export const metadata: Metadata = {
    title: "Interio",
    description: "Interior UI/UX app for home design.",
}

export const revalidate = 86400 // ✅ ISR: revalidate once per day (optional)

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const footer = await HomeService.getfooter()

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
                <Footer footer={footer?.footerSection} />
            </body>
        </html>
    )
}
