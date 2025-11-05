import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/lib/themeProvider"
import Navbar from "@/components/layout/navbar/navbar"
import SearchProvider from "@/lib/searchContext"
import Footer from "@/components/layout/footer/footer"
import Sidebar from "@/components/layout/sidebar"
import HomeService from "@/services/home/homeService"

export const metadata: Metadata = {
    title: {
        default: "Interio",
        template: `%s | Interio`,
    },
    description: "Interior UI/UX app for home design.",
    keywords: [
        "interior designers in Bangalore",
        "home interior design team",
        "luxury interiors JP Nagar",
        "Interio design experts",
    ],
    metadataBase: new URL(
        process.env.NEXT_SITE_URL ?? "https://yourdomain.com"
    ),
    openGraph: {
        title: "Meet Our Interior Design Team | Interio",
        description:
            "Discover the talented professionals behind Interio’s innovative interiors in Bangalore. Our team brings life to every project with passion and precision.",
        url: process.env.NEXT_SITE_URL ?? "https://yourdomain.com",
        type: "website",
        siteName: "Interio",
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 630,
                alt: "Interio Design Team",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Meet Our Interior Design Team | Interio",
        description:
            "Get to know the creative minds designing your dream spaces at Interio.",
        images: ["https://yourdomain.com/og-images/team.jpg"],
    },
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
