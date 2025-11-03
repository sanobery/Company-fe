// components/ScrollReveal.tsx
"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function ScrollReveal({
    children,
    delay = 0.1,
}: {
    children: React.ReactNode
    delay?: number
}) {
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [inView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay },
                },
            }}
        >
            {children}
        </motion.div>
    )
}
