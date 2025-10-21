interface LinkProps {
    href: string
}
export interface SocialIconProps extends LinkProps {
    Icon: React.ElementType
}

export interface NavItemProps extends LinkProps {
    label: string
}

export interface TeamMemberProps {
    documentId: string
    name: string
    designation: string
    photo: {
        formats?: {
            medium?: { url: string }
            thumbnail?: { url: string }
        }
        url: string
    }[]
}

export interface BlogProps {
    documentId: string
    title: string
    author: {
        name: string
    }
    date: Date
    content: string
    image: {
        formats?: {
            medium?: { url: string }
            thumbnail?: { url: string }
        }
        url: string
    }[]
}

export interface Product {
    documentId: string
    title: string
    description: string
    image: {
        formats?: {
            medium?: { url: string }
            thumbnail?: { url: string }
        }
        url: string
    }[]
    price: number
    theme: string
}

export interface FooterDetailProps {
    label: string
    items: string[]
}
