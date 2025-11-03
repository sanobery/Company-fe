// components/AnimatedItem.tsx
"use client"
import { motion } from "framer-motion"
import { ElementType } from "react"

interface AnimatedItemProps {
    children: React.ReactNode
    index?: number
    className?: string
    once?: boolean
    amount?: number
    tag?: ElementType // e.g., "div", "p", "li", etc.
    initial?: object
    animate?: object
    transition?: object
    viewport?: {
        once?: boolean
        amount?: number
    }
}

export default function AnimatedItem({
    children,
    index = 0,
    className = "",
    tag: Tag = motion.div,
    initial = { opacity: 0, y: 50 },
    animate = { opacity: 1, y: 0 },
    transition = { duration: 0.6, delay: index * 0.2 },
    viewport = { once: false, amount: 0.3 },
}: AnimatedItemProps) {
    return (
        <Tag
            initial={initial}
            whileInView={animate}
            viewport={viewport}
            transition={transition}
            className={className}
        >
            {children}
        </Tag>
    )
}
