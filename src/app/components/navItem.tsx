// components/NavItem.tsx
import Link from "next/link"
import { NavItemProps } from "../types/company"

export default function NavItem({ label, href }: NavItemProps) {
    return (
        <li className="hover:text-gray-900 hover:bg-gray-200 px-2 py-1 rounded transition hover:cursor-pointer hover:font-bold">
            <Link href={href}>{label}</Link>
        </li>
    )
}
