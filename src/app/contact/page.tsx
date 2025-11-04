import Hero from "@/components/sections/home/hero"

/**
 * Contact Page Component
 * ----------------------
 * Displays the contact information section of the website.
 * Uses the reusable <Hero /> component with customized props
 * to render a banner section for the contact page.
 */
export default function Contact() {
    return (
        <div>
            <Hero
                heading="WEA Designs Studio"
                paragraph="No – 21 , 2nd floor, Dorasani Palaya, Krishnaraju Layout, JP Nagar 7th Phase, Panduranga Nagar, Bengaluru, Karnataka 560076"
                image="/images/home2.webp"
                showContactPage={true}
                notFound={false}
            />
        </div>
    )
}
