// components/NavItem.tsx
import Link from "next/link"
import { NavItemProps } from "../types/companyInterface"

export default function NavItem({ label, href }: NavItemProps) {
    return (
        <li className="regular-16 text-white flexCenter cursor-pointer mt-0.5 hover:font-bold transition-all">
            <Link href={href}>{label}</Link>
        </li>
    )
}
