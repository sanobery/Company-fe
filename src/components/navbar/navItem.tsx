// components/NavItem.tsx
import { NavItemProps } from "@/types/companyInterface"
import Link from "next/link"

export default function NavItem({ label, href }: NavItemProps) {
    return (
        <li className="regular-16 text-white flexCenter cursor-pointer mt-0.5 hover:font-bold transition-all">
            <Link href={href}>{label}</Link>
        </li>
    )
}
