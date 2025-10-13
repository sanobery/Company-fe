// components/Footer.tsx
import { FaBlog, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import SocialMediaIcon from "./socialMediaIcon"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-center py-4">
            <div className="flex justify-around items-center">
                <SocialMediaIcon
                    href="https://www.instagram.com/yourprofile"
                    Icon={FaInstagram}
                />
                <SocialMediaIcon
                    href="https://www.instagram.com/yourprofile"
                    Icon={FaLinkedin}
                />
                <SocialMediaIcon
                    href="https://www.instagram.com/yourprofile"
                    Icon={FaFacebook}
                />

                <SocialMediaIcon
                    href="https://www.instagram.com/yourprofile"
                    Icon={FaTwitter}
                />

                <SocialMediaIcon
                    href="https://www.instagram.com/yourprofile"
                    Icon={FaBlog}
                />
            </div>
            <hr className="text-gray-400 m-3" />
            <p className="font-semibol text-gray-400">
                © 2025 Mindfire Solutions. All Rights Reserved.
            </p>
        </footer>
    )
}
