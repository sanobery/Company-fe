// components/common/OptimizedImage.tsx
"use client"
import { LazyImageProps } from "@/types/companyInterface"
import Image from "next/image"

export default function LazyImage({
    src,
    alt,
    width = 40,
    height = 40,
    className = "object-cover",
    fallback = "/default.jpg",
    priority = false,
    fill = false,
    sizes,
}: LazyImageProps) {
    const imageUrl = src || fallback

    return (
        <Image
            src={imageUrl}
            alt={alt}
            className={className}
            priority={priority}
            {...(fill ? { fill: true } : { width, height })}
            sizes={sizes}
        />
    )
}
