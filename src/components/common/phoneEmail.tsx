import { ContactProps } from "@/types/companyInterface"
import SocialMediaIcon from "../shared/socialMediaIcon"

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
