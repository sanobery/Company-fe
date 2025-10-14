import { SocialIconProps } from "@/types/company"

export default function SocialMediaIcon({ href, Icon }: SocialIconProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="text-gray-400" />
        </a>
    )
}
