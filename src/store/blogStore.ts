// store/blogStore.ts
import { create } from "zustand"
import { BlogProps } from "@/types/companyInterface"

interface BlogState {
    allPosts: BlogProps[]
    setAllPosts: (posts: BlogProps[]) => void
}

export const useBlogStore = create<BlogState>((set) => ({
    allPosts: [],
    setAllPosts: (posts) => set({ allPosts: posts }),
}))
