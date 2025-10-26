import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Image from "next/image"
import SearchProvider from "@/components/searchContext"

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
        <html lang="en">
            <body>
                <SearchProvider>
                    <Navbar />
                    <main className="relative overflow-hidden pt-[100px]">
                        {" "}
                        {children}
                    </main>
                </SearchProvider>
                <div className="fixed top-1/3 right-0 z-50 flex flex-col gap-4">
                    <Image
                        src="/images/youtube.svg"
                        alt="youtube"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    <Image
                        src="/images/facebook.svg"
                        alt="facebook"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    <Image
                        src="/images/instagram.svg"
                        alt="instagram"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    <Image
                        src="/images/linkedin.svg"
                        alt="linkedin"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                </div>
                <Footer />
            </body>
        </html>
    )
}
