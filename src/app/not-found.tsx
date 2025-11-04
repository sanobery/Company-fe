// app/not-found.tsx
import Hero from "@/components/sections/home/hero"

/**
 * NotFound Component
 * ------------------------------------------------------------
 * This component is automatically rendered by Next.js when
 * a user navigates to a non-existent route (404 page).
 *
 * It reuses the `Hero` component to maintain visual consistency
 * with the rest of the site while displaying a friendly error message.
 *
 * Props passed to <Hero>:
 *  - heading: Main error title shown on the page.
 *  - paragraph: Short explanation for the user.
 *  - image: Background or hero image for the section.
 *  - showContactPage: Disabled here (false) to hide contact form.
 *  - notFound: Custom flag (true) to adjust styling or behavior for 404 pages.
 */
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
