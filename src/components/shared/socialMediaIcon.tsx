import { SocialIconProps } from "@/types/companyInterface"

/**
 * SocialMediaIcon Component
 * ------------------------------------------------------------
 * A reusable component that renders a social media icon as a clickable link.
 *
 * Props (SocialIconProps):
 *  - href: string → The external URL to navigate to when clicked.
 *  - Icon: React.ElementType → The icon component to render (e.g., FaFacebook).
 *
 * Features:
 *  - Opens links in a new browser tab securely using `target="_blank"` and `rel="noopener noreferrer"`.
 *  - Adds a hover animation that smoothly enlarges the icon.
 */
export default function SocialMediaIcon({ href, Icon }: SocialIconProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="inline-block">
                <Icon className="text-navfootItem text-2xl hover:scale-125 transition-transform duration-200" />
            </div>
        </a>
    )
}
