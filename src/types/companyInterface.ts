import { ContactFormType } from "@/schemas/contactSchema"
import { UseFormRegister } from "react-hook-form"

/**Base Interface */
interface ImageFormat {
    url: string
}

interface ImageFormats {
    medium?: ImageFormat
    thumbnail?: ImageFormat
}

interface Media {
    formats?: ImageFormats
    url: string
}

interface LinkProps {
    href: string
}

interface WithLabel {
    label: string
}

interface WithImage {
    image: Media
}

interface WithDocument {
    documentId: string
}

/**Navigation & Social */
export interface SocialIconProps extends LinkProps {
    Icon: React.ElementType
}

export interface NavItemProps extends LinkProps, WithLabel {
    onClick?: () => void
}

export interface ContactProps extends SocialIconProps, WithLabel {}

/**Content Entities */
export interface TeamMemberProps extends WithDocument, WithImage {
    id: number
    name: string
    designation: string
    bio: string
}

export interface BlogProps extends WithDocument, WithImage {
    title: string
    author: { name: string }
    date: Date
    content: string
}

export interface ProductProps extends WithDocument, WithImage {
    title: string
    description: string
    price: number
    theme: string
}

/**UI & Layout */
export interface FooterDetailProps extends WithLabel, LinkProps {
    items: string[]
}

export interface ColorProps {
    color: string
}

export interface ModalProps {
    setShowModal: (value: boolean) => void
}

/**Forms */
export interface ContactFormProps {
    name: string
    type?: string
    buttontype?: "submit" | "reset" | "button"
    placeholder?: string
    color?: string
    onClick?: () => void
    notFound?: boolean
}

export interface ExtendedContactFormProps extends ContactFormProps {
    register: UseFormRegister<ContactFormType>
    error?: string
}

export interface ContactPayload {
    data: ContactFormType
}

/**Hero & Sections */
export interface HeroProps {
    heading: string
    paragraph: string
    image?: string
    showContactPage?: boolean
    notFound?: boolean
}

export interface EntityDetailsProps {
    type: "blog" | "team"
    slug: string
}

export interface QuoteSectionProps {
    color?: string
    title?: string
    widthClass?: string
}

/**Process & Steps */
interface Step {
    title: string
}

interface ProcessData {
    id: number
    heading: string
    para1: string
    para2: string
    Steps: Step[]
}

export interface ProcessProps {
    data: ProcessData | null
}

interface StepItem {
    icon: React.ElementType
    title: string
    description: string
}

interface StepsData {
    image: { url: string }
    heading: string
    paragraph: string
    stepItem: StepItem[]
}

export interface StepsProps {
    data: StepsData | null
}

/**Testimonials & Meta */
export interface Testimonial {
    quote: string
    name: string
    company: string
    rating: number
    project: string
    country: string
}

export interface TestimonialsProps {
    testimonials?: Testimonial[] | null
}

export interface ProductComponentProps {
    type: "products" | "team"
    data: ProductProps[] | TeamMemberProps[]
}

export interface ProductMetaProps {
    label?: string
    value: string | number
}

export interface LazyImageProps {
    src?: string
    alt: string
    width?: number
    height?: number
    className?: string
    fallback?: string
    priority?: boolean
    fill?: boolean
    sizes?: string
}
export interface FooterLinkGroup {
    id?: string
    groupLabel: string
    groupLinks: (WithLabel & ImageFormat)[]
}

interface AddressChild {
    children: { text: string }[]
}

export interface footerProps extends Omit<HeroProps, "image"> {
    image: Media
    address: AddressChild[]
    copyright: string
    socialMediaIcon: SocialIconProps[]
    footerLinkGroup: FooterLinkGroup[]
}

export interface footerLayoutProps {
    footer: footerProps | null
}

export interface BlogState {
    allPosts: BlogProps[]
    setAllPosts: (posts: BlogProps[]) => void
}

interface ExtendedHeroProps extends Omit<HeroProps, "image"> {
    image: { url: string }
}

export interface HomePageData {
    hero: ExtendedHeroProps | null
    stepSection?: StepsData | null
    processSection?: ProcessData | null
    testimonials?: Testimonial[] | null
}
