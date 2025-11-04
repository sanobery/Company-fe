import ContactGaadi from "@/components/sections/contact/ContactGaadi"
import { render, screen, fireEvent } from "@testing-library/react"

describe("ContactGaadi Component", () => {
    beforeEach(() => {
        render(<ContactGaadi />)
    })
    it("renders heading and description text", () => {
        expect(
            screen.getByText(
                /What’s New in Wea Interior Designers company in Bangalore 2025*/i
            )
        ).toBeInTheDocument()

        expect(screen.getByLabelText("contactGaddiPara")).toBeInTheDocument()
    })

    it("renders the main images correctly", () => {
        // Background image
        expect(screen.getByAltText("Gaddi")).toBeInTheDocument()

        // Foreground image (inside Slide)
        expect(screen.getByAltText("Gaadi")).toBeInTheDocument()
    })

    it("renders Slide component content", () => {
        // Our mocked Slide adds a test-id
        const slide = screen.getByTestId("slideMock")
        expect(slide).toBeInTheDocument()
    })

    it("toggles modal when clicking GET QUOTE button", () => {
        const button = screen.getByRole("button", { name: /GET QUOTE/i })
        fireEvent.click(button)

        // Modal should appear
        const modal = screen.getByTestId("modal")
        expect(modal).toBeInTheDocument()

        // Close the modal
        const closeBtn = screen.getByLabelText("Close")
        fireEvent.click(closeBtn)

        // Modal should disappear
        expect(modal).not.toBeInTheDocument()
    })
})
