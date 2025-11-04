import { ContactProps } from "@/types/companyInterface"
import SocialMediaIcon from "../shared/socialMediaIcon"

/**
 * PhoneEmail Component
 * ---------------------------------
 * Displays a contact method (e.g., phone number or email)
 * along with a circular background icon.
 *
 * Props (from ContactProps):
 * - href: string → the contact link (e.g., mailto: or tel:)
 * - Icon: React component → the icon to display (e.g., phone or email icon)
 * - label: string → text label (e.g., phone number or email address)
 *
 * Usage:
 * <PhoneEmail
 *   href="mailto:info@company.com"
 *   Icon={FaEnvelope}
 *   label="info@company.com"
 * />
 */
export default function PhoneEmail({ href, Icon, label }: ContactProps) {
    return (
        <div className="flex flex-row ">
            <div className="bg-[#d3925d] p-3 rounded-full mt-3">
                <SocialMediaIcon href={href} Icon={Icon} />
            </div>
            <label className="m-3 text-xl font-bold text-white">{label}</label>
        </div>
    )
}
