import HomeClient from "@/components/sections/home/home"

/**
 * Home Page (Server Component)
 * ------------------------------------------------------------
 * This is the main entry point for the home route (`/`).
 *
 * - It’s defined as an **async Server Component** by default in Next.js 13+,
 *   which allows data fetching before rendering (even though this one doesn’t fetch data yet).
 * - The `HomeClient` component is imported and rendered inside — this handles
 *   client-side interactions and UI logic.
 * - A light background color is applied for a soft, welcoming design.
 */
export default async function Home() {
    return (
        <div className="bg-[#fae6d0]">
            <HomeClient />
        </div>
    )
}
