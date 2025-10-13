interface LinkProps {
    href: string
}
export interface SocialIconProps extends LinkProps {
    Icon: React.ElementType
}

export interface NavItemProps extends LinkProps {
    label: string
}
