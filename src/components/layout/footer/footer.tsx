// components/Footer.tsx
import { FaBlog, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import FooterDetail from "./footerDetail"
import SocialMediaIcon from "@/components/shared/socialMediaIcon"
import LazyImage from "@/components/common/LazyImage"
import { footerLayoutProps, FooterLinkGroup } from "@/types/companyInterface"

/**
 * Footer Component
 * ------------------------------------------------------------
 * This component renders the website footer section.
 * It dynamically displays data fetched from the CMS (via `footerLayoutProps`),
 * including:
 *  - Company logo and description
 *  - Address details (as rich text)
 *  - Social media icons
 *  - Footer navigation links (Pages, Services, etc.)
 *  - Copyright section
 *
 * Props:
 *  - footer: An object containing:
 *      - image: Company logo (with URL)
 *      - paragraph: Brief footer text/description
 *      - address: Array of text blocks (HTML formatted)
 *      - footerLinkGroup: Array of grouped navigation links
 *      - copyright: Footer copyright text
 */
export default function Footer({ footer }: footerLayoutProps) {
    // Get the current year dynamically for the copyright
    const year = new Date().getFullYear()

    return (
        <footer className="bg-navfoot text-center py-4 text-lg sm:text-lg md:text-lg">
            <div className="container mx-auto px-auto ">
                <div className="flex flex-col md:flex-row xl:gap-[100px] text-navfootItem">
                    {/* =======================
                        Left Section (Logo, About, Socials, Address)
                    ======================= */}
                    <div className="w-full max-w-[400px] mx-auto text-center xl:text-left space-y-6">
                        <a className="flex justify-center xl:justify-start">
                            <LazyImage
                                src={`${footer?.image?.url}`}
                                alt="Company Logo"
                                width={300}
                                height={70}
                            />
                        </a>
                        <p className="text-center md:text-left text-wrap md:text-lg px-4 sm:px-6 md:px-10 lg:px-0">
                            {`${footer?.paragraph}`}
                        </p>
                        <ul className="flex gap-[54px] justify-center xl:justify-start">
                            <li>
                                <SocialMediaIcon
                                    href="https://www.instagram.com/yourprofile"
                                    Icon={FaInstagram}
                                />
                            </li>
                            <li>
                                <SocialMediaIcon
                                    href="https://www.instagram.com/yourprofile"
                                    Icon={FaLinkedin}
                                />
                            </li>
                            <li>
                                <SocialMediaIcon
                                    href="https://www.instagram.com/yourprofile"
                                    Icon={FaFacebook}
                                />
                            </li>
                            <li>
                                <SocialMediaIcon
                                    href="https://www.instagram.com/yourprofile"
                                    Icon={FaTwitter}
                                />
                            </li>
                            <li>
                                <SocialMediaIcon
                                    href="https://www.instagram.com/yourprofile"
                                    Icon={FaBlog}
                                />
                            </li>
                        </ul>

                        <div className="text-center md:text-left text-wrap md:text-lg px-4 sm:px-6 md:px-10 lg:px-0">
                            {footer?.address.map((block, index) => (
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{
                                        __html: block?.children
                                            .map((child) => child.text)
                                            .join(""),
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <hr className="text-navfoot m-3" />
                    {/* =======================
                        Right Section (Footer Links)
                    ======================= */}
                    <div className="w-full max-w-[400px] mx-auto text-left flex flex-col xl:flex-row gap-8 mt-0 md:mt-60 xl:mt-50">
                        <div className="flex flex-col gap-8 w-full md:flex-row xl:justify-between items-center">
                            {/* Pages & Services */}
                            {footer?.footerLinkGroup?.map(
                                (group: FooterLinkGroup) => (
                                    <FooterDetail
                                        key={group.id}
                                        groupLabel={group.groupLabel}
                                        groupLinks={group.groupLinks}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-navfootItem m-3" />
            {/* CopyRight */}
            <p className=" text-navfootItem text-wrap">
                {`${year}`} {`${footer?.copyright}`}
            </p>
        </footer>
    )
}
