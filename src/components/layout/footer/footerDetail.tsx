import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { FooterLinkGroup } from "@/types/companyInterface"
import Link from "next/link"

/**
 * FooterDetail Component
 * ------------------------------------------------------------
 * This component renders a single footer column section containing:
 *  - A section title (groupLabel)
 *  - A list of navigation links (groupLinks)
 *
 * Each link includes:
 *  - The link label text.
 *  - A right-facing chevron icon for visual cue.
 *
 * Props:
 *  - id: Unique identifier for the group (used for keying).
 *  - groupLabel: Title of the footer section (e.g., "Pages", "Services").
 *  - groupLinks: Array of link objects containing `label` and `url`.
 *
 * Example structure:
 *  {
 *    id: 5,
 *    groupLabel: "Pages",
 *    groupLinks: [{ label: "Home", url: "/home" }, ...]
 *  }
 */
export default function FooterDetail({
    id,
    groupLabel,
    groupLinks,
}: FooterLinkGroup) {
    return (
        <div key={id} className="flex flex-col items-start flex-1">
            <h3 className="text-xl font-semibold mb-2">{groupLabel}</h3>
            <ul className="flex flex-col gap-2">
                {groupLinks.map((link, index) => (
                    <li
                        className="pb-2 reusable-hover"
                        key={`${id}-${link}-${index}`}
                    >
                        <Link href={link.url}>
                            <button className="flex w-full items-center justify-between text-left">
                                <span>{link.label}</span>
                                <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
