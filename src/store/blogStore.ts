// store/blogStore.ts
import { create } from "zustand"
import { BlogState } from "@/types/companyInterface"

/**
 * useBlogStore
 * ------------------------------------------------------------
 * Zustand store for managing blog-related state.
 *
 * - Keeps all fetched blog posts in a centralized state.
 * - Provides a setter function (`setAllPosts`) to update posts.
 *
 * This store can be accessed anywhere in the app using:
 *    const { allPosts, setAllPosts } = useBlogStore();
 *
 * Benefits:
 * - Avoids redundant API calls by caching blog posts.
 * - Enables global access to blog data across components.
 */
export const useBlogStore = create<BlogState>((set) => ({
    allPosts: [],
    setAllPosts: (posts) => set({ allPosts: posts }),
}))
