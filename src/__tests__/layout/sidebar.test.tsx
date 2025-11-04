import Sidebar from "@/components/layout/sidebar"
import { render, screen } from "@testing-library/react"

describe("Sidebar Component", () => {
    beforeEach(() => {
        render(<Sidebar />)
    })

    it("renders all social media icons", () => {
        // Check that all images are present with correct alt text
        expect(screen.getByAltText("youtube")).toBeInTheDocument()
        expect(screen.getByAltText("instagram")).toBeInTheDocument()
        expect(screen.getByAltText("linkedin")).toBeInTheDocument()
        expect(screen.getByAltText("facebook")).toBeInTheDocument()
    })

    it("renders 4 LazyImage elements", () => {
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(4)
    })
})
