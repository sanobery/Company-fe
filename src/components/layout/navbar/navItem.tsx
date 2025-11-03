// components/NavItem.tsx
import { NavItemProps } from "@/types/companyInterface"
import Link from "next/link"

export default function NavItem({ label, href, onClick }: NavItemProps) {
    return (
        <li className="regular-16 text-navfootItem flexCenter  mt-0.5 reusable-hover">
            <Link href={href} onClick={onClick}>
                {label}
            </Link>
        </li>
    )
}
