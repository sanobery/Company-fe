// components/NavItem.tsx
import { NavItemProps } from "@/types/companyInterface"
import Link from "next/link"

/**
 * NavItem Component
 * ------------------------------------------------------------
 * Represents a single navigation link item used in the website’s header or footer navigation menus.
 *
 * Props:
 * - label: The text to display for the navigation link.
 * - href: The URL path that the link points to.
 * - onClick: (optional) A callback function triggered when the item is clicked —
 *            useful for closing mobile menus or tracking analytics.
 *
 * Features:
 * - Uses Next.js <Link> for client-side navigation (better performance and SEO).
 * - Includes accessibility via `aria-label`.
 * - Styled with hover and layout utility classes.
 */
export default function NavItem({ label, href, onClick }: NavItemProps) {
    return (
        <li className="regular-16 text-navfootItem flexCenter  mt-0.5 reusable-hover">
            <Link
                role="link"
                aria-label={`${label}link`}
                href={href}
                onClick={onClick}
            >
                {label}
            </Link>
        </li>
    )
}
