import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/lib/themeProvider"
import Navbar from "@/components/layout/navbar/navbar"
import SearchProvider from "@/lib/searchContext"
import Footer from "@/components/layout/footer/footer"
import Sidebar from "@/components/layout/sidebar"
import HomeService from "@/services/home/homeService"
import { siteConfig } from "@/lib/config"

const siteUrl = siteConfig.baseUrl

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "interior designers in Bangalore",
        "home interior design team",
        "luxury interiors JP Nagar",
        "Interio design experts",
    ],
    authors: [{ name: "Sanober Yousuf" }, { name: "Debasis Sabat" }],
    openGraph: {
        title: "Meet Our Interior Design Team | Interio",
        description:
            "Discover the talented professionals behind Interio’s innovative interiors in Bangalore. Our team brings life to every project with passion and precision.",
        url: siteUrl,
        type: "website",
        siteName: "Interio",
        images: [
            {
                url: `${siteUrl}/images/logo.png`, // ✅ Absolute URL
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
        images: [`${siteUrl}/images/logo.png`], // ✅ Absolute URL
    },
}

export const revalidate = 86400

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
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
