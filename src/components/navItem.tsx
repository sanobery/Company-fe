// components/NavItem.tsx
import Link from "next/link"
import { NavItemProps } from "../types/company"

export default function NavItem({ label, href }: NavItemProps) {
    return (
        <li className="regular-16 text-gray-500 flexCenter cursor-pointer mt-0.5 hover:font-bold transition-all">
            <Link href={href}>{label}</Link>
        </li>
    )
}
