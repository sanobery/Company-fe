/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react"
import SearchBar from "@/components/layout/searchbar"
import { useSearch } from "@/lib/searchContext"
import { usePathname } from "next/navigation"
import toast from "react-hot-toast"

// ✅ Mock dependencies
jest.mock("next/navigation", () => ({
    usePathname: jest.fn(),
}))
jest.mock("react-hot-toast", () => ({
    error: jest.fn(),
}))
jest.mock("@/lib/searchContext", () => ({
    useSearch: jest.fn(),
}))

describe("SearchBar Component", () => {
    const setQueryMock = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
        ;(useSearch as jest.Mock).mockReturnValue({
            query: "",
            setQuery: setQueryMock,
        })
    })

    it("renders search icon and toggles input visibility", () => {
        ;(usePathname as jest.Mock).mockReturnValue("/blog")

        render(<SearchBar />)

        // Input should be hidden initially
        const input = screen.getByPlaceholderText("Search...")
        expect(input).toHaveClass("opacity-0")

        // Click search icon
        const icon = screen.getByRole("button", { name: /searchbar/i })
        fireEvent.click(icon)

        // Input should now be visible
        expect(input).toHaveClass("opacity-100")
    })

    it("shows toast error when not on /blog", () => {
        ;(usePathname as jest.Mock).mockReturnValue("/products")

        render(<SearchBar />)

        const icon = screen.getByRole("button", { name: /searchbar/i })
        fireEvent.click(icon)

        const input = screen.getByPlaceholderText("Search...")
        fireEvent.change(input, { target: { value: "React" } })

        expect(toast.error).toHaveBeenCalledWith(
            "Searching works only for Blogs",
            expect.any(Object)
        )
        expect(setQueryMock).not.toHaveBeenCalled()
    })

    it("updates search query when on /blog", () => {
        ;(usePathname as jest.Mock).mockReturnValue("/blog")

        render(<SearchBar />)

        const icon = screen.getByRole("button", { name: /searchbar/i })
        fireEvent.click(icon)

        const input = screen.getByPlaceholderText("Search...")
        fireEvent.change(input, { target: { value: "Next.js" } })

        expect(setQueryMock).toHaveBeenCalledWith("Next.js")
    })
})
