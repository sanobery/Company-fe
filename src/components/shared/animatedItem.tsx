// components/AnimatedItem.tsx
"use client"

import { motion } from "framer-motion"
import { ElementType } from "react"

/**
 * AnimatedItem Component
 * ------------------------------------------------------------
 * A reusable animation wrapper built with Framer Motion.
 * It animates any child element as it enters the viewport.
 *
 * This component is useful for staggered animations in lists,
 * grids, or sections where elements fade/slide in sequentially.
 *
 * Props:
 *  - children: ReactNode → The content to animate.
 *  - index?: number → Controls animation delay for staggered effects.
 *  - className?: string → Optional Tailwind or CSS class.
 *  - tag?: ElementType → The HTML or motion element type (default: motion.div).
 *  - initial?: object → The starting animation state.
 *  - animate?: object → The target animation state.
 *  - transition?: object → Controls duration and delay of animation.
 *  - viewport?: object → Controls when the animation triggers.
 *      - once?: boolean → Whether animation runs only once.
 *      - amount?: number → How much of the element must be visible before triggering.
 */
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
