// app/not-found.tsx
import Hero from "@/components/sections/home/hero"

export default function NotFound() {
    return (
        <>
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph="Sorry, but the page you were trying to view does not exist."
                image="/images/home2.webp"
                showContactPage={false}
                notFound={true}
            />
        </>
    )
}
