// components/Footer.tsx
import { FaBlog, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import SocialMediaIcon from "../socialMediaIcon"
import Image from "next/image"
import FooterDetail from "./footerDetail"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-[#0e3234] text-center py-4 text-lg sm:text-lg md:text-lg">
            <div className="container mx-auto px-auto ">
                <div className="flex flex-col xl:flex-row xl:gap-[100px] text-white">
                    <div className="w-full max-w-[400px] mx-auto text-center xl:text-left space-y-6">
                        <a className="flex justify-center xl:justify-start">
                            <Image
                                src="/images/logo.png"
                                alt="Company Logo"
                                width={300}
                                height={70}
                                loading="lazy"
                                priority={false}
                            />
                        </a>
                        <p className="text-center text-wrap md:text-lg">
                            It is a long established fact that a reader will be
                            distracted lookings.
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
                        <div>
                            <p>55 East Birchwood Ave.</p>
                            <p>Brooklyn, New York 1120</p>
                            <p>contact@interno.com</p>
                            <p>(123) 456 - 7890</p>
                        </div>
                    </div>
                    <hr className="text-gray-400 m-3" />

                    <div className="w-full max-w-[400px] mx-auto text-left flex flex-col xl:flex-row gap-8">
                        <div className="flex flex-col gap-8 w-full xl:flex-row xl:justify-between items-center">
                            {/* Pages */}
                            <FooterDetail
                                label="Pages"
                                items={[
                                    "Home",
                                    "About Us",
                                    "Our Work",
                                    "Contact Us",
                                ]}
                            />

                            {/* Services */}
                            <FooterDetail
                                label="Services"
                                items={[
                                    "Kitchen",
                                    "Living Area",
                                    "Bathroom",
                                    "Bedroom",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-400 m-3" />
            <p className=" text-gray-400 text-wrap">
                Copyright © Interno {`${year}`} | All Rights Reserved |
                Designed by Sanober Yousuf
            </p>
        </footer>
    )
}
