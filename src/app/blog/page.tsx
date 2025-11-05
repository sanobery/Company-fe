import { getMessage } from "@/lib/constantMessage"
import { Metadata } from "next"
import BlogClient from "./blogClient"

export const metadata: Metadata = {
    title: getMessage("Blog", "page"),
}

export default function Blog() {
    return <BlogClient />
}
