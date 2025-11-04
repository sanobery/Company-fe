"use client"

import { LazyImageProps } from "@/types/companyInterface"
import Image from "next/image"

/**
 * LazyImage Component
 * --------------------
 * A reusable wrapper around Next.js <Image> that:
 * - Provides a fallback image if the main `src` is missing
 * - Supports both fixed and fill-based layouts
 * - Uses lazy loading by default (Next.js does this automatically)
 *
 * Props:
 * - src: Image source URL
 * - alt: Accessible description for the image
 * - width, height: Dimensions (used when `fill` is false)
 * - className: Custom styling class (default: "object-cover")
 * - fallback: Fallback image path (used if src is null/undefined)
 * - priority: Whether the image should load immediately (for above-the-fold images)
 * - fill: Enables responsive "fill" layout that stretches the image
 * - sizes: Responsive image sizing hints for optimization
 */
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
