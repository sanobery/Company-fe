// app/not-found.tsx
import Hero from "@/components/home/hero"

export default function NotFound() {
    return (
        <>
            <Hero
                heading="PAGE NOT FOUND 🙁"
                paragraph="Sorry, but the page you were trying to view does not exist."
                image="home2.webp"
                showContactPage={false}
                notFound={true}
            />
        </>
    )
}
