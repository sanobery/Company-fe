import { SocialIconProps } from "@/types/companyInterface"

export default function SocialMediaIcon({ href, Icon }: SocialIconProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="inline-block">
                <Icon className="text-white text-2xl hover:scale-125 transition-transform duration-200" />
            </div>
        </a>
    )
}
