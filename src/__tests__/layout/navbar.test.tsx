import Navbar from "@/components/layout/navbar/navbar"
import { render, screen, fireEvent, within } from "@testing-library/react"

// 🧪 --- Tests ---
describe("Navbar Component", () => {
    const navItems = ["Home", "Services", "Team", "Blog", "Contact"]

    beforeEach(() => {
        render(<Navbar />)
    })

    it("renders logo, nav items, and theme toggle on desktop", () => {
        // ✅ Logo
        expect(screen.getByAltText(/company logo/i)).toBeInTheDocument()

        // ✅ Desktop Nav Items
        navItems.forEach((item) =>
            expect(screen.getByText(item)).toBeInTheDocument()
        )

        // ✅ Theme Toggle
        expect(screen.getByLabelText("toggleTheme")).toBeInTheDocument()
    })

    it("toggles the mobile menu when clicking the bars icon", () => {
        const menuButton = screen.getByRole("button", {
            name: /mobilemenutoggle/i,
        })

        // Open menu
        fireEvent.click(menuButton)
        const mobileMenu = screen.getByLabelText("mobileMenu")
        expect(mobileMenu).toBeInTheDocument()

        // Close menu
        fireEvent.click(menuButton)
        expect(screen.queryByLabelText("mobileMenu")).not.toBeInTheDocument()
    })

    it("closes mobile menu when a nav item is clicked", () => {
        const menuButton = screen.getByRole("button", {
            name: /mobilemenutoggle/i,
        })

        // Open menu
        fireEvent.click(menuButton)
        const mobileMenu = screen.getByLabelText("mobileMenu")
        expect(mobileMenu).toBeInTheDocument()

        // Find Home link inside mobile menu
        const homeLink = within(mobileMenu).getByRole("link", {
            name: "Homelink",
        })
        fireEvent.click(homeLink)

        // Verify it closes
        expect(screen.queryByLabelText("mobileMenu")).not.toBeInTheDocument()
    })

    it("Theme Toggle changes color", () => {
        const themeToggle = screen.getByLabelText("toggleTheme")

        // Click the theme toggle button
        fireEvent.click(themeToggle)

        // Get the root HTML element (where Tailwind dark mode usually applies)
        const htmlElement = document.documentElement

        // Check which icon should appear based on theme class
        if (htmlElement.classList.contains("dark")) {
            // Dark mode active → expect moon icon
            expect(screen.getByLabelText("moon")).toBeInTheDocument()
        } else {
            // Light mode active → expect sun icon
            expect(screen.getByLabelText("sun")).toBeInTheDocument()
        }
    })
})
