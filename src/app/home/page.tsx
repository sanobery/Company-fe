import HomeClient from "@/components/sections/home/home"

// ✅ Server Component
export default async function Home() {
    return (
        <div className="bg-[#fae6d0]">
            <HomeClient />
        </div>
    )
}
