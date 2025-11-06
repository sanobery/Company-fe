// lib/seoUtils.ts
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getMessage } from "./constantMessage"
import {
    BlogProps,
    ProductProps,
    TeamMemberProps,
} from "@/types/companyInterface"

type EntityType = "blog" | "service" | "team"

export async function generateEntityMetadata(
    type: EntityType,
    getEntityBySlug: (
        slug: string
    ) => Promise<BlogProps | ProductProps | TeamMemberProps | null>,
    slug: string
): Promise<Metadata> {
    const siteUrl = siteConfig.baseUrl
    const entity = await getEntityBySlug(slug)
    console.log(entity, slug, type, 22)

    if (!entity) {
        return {
            title: getMessage(type, "notFound"),
        }
    }
    // 🧠 Detect correct title/name and description fields
    const entityTitle =
        type === "team"
            ? (entity as TeamMemberProps).name
            : (entity as BlogProps).title

    let entityExcerpt

    switch (type) {
        case "blog":
            entityExcerpt = (entity as BlogProps).content
        case "team":
            entityExcerpt = (entity as TeamMemberProps).designation
        case "service":
            entityExcerpt = (entity as ProductProps).description
    }

    const url = `${siteUrl}/${type}/${slug}`

    const image = entity.image
        ? `${siteUrl}${entity.image?.[0]?.url}`
        : `${siteUrl}/images/default-og.jpg`

    return {
        title: entityTitle,
        description: entityExcerpt,
        openGraph: {
            title: entityTitle,
            description: entityExcerpt,
            url,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: entityTitle,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: entityTitle,
            description: entityExcerpt,
            images: [image],
        },
    }
}
