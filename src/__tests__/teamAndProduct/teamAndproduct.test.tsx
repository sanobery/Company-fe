/**
 * @fileoverview Unit tests for Product component.
 */
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import useSWR from "swr"
import Product from "@/components/sections/product/product"
import ProductService from "@/services/product/productService"
import teamService from "@/services/team/teamService"

// ✅ Mock API services
jest.mock("@/services/product/productService")
jest.mock("@/services/team/teamService")
jest.mock("@/services/api/axiosInstance")
jest.mock("next/link", () => ({ children }: any) => <a>{children}</a>)

describe("Product Component", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("renders product heading and description when type='products'", async () => {
        ;(useSWR as jest.Mock).mockReturnValue({
            data: [
                {
                    title: "Luxury Villa",
                    theme: "Modern",
                    price: "50L",
                    documentId: "123",
                    image: [{ url: "/test-image.jpg" }],
                },
            ],
            isLoading: false,
            error: undefined,
        })

        render(<Product type="products" />)

        // Heading assertion
        expect(
            screen.getByText(/Explore the Recent Creations/i)
        ).toBeInTheDocument()

        // Image rendered
        await waitFor(() =>
            expect(screen.getByTestId("lazyImage")).toBeInTheDocument()
        )

        // Meta rendered
        expect(screen.getByLabelText(/Type:Luxury Villa/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Theme:Modern/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Budget:50L/)).toBeInTheDocument()
    })

    it("renders team heading and member details when type='team'", async () => {
        ;(useSWR as jest.Mock).mockReturnValue({
            data: [
                {
                    name: "John Doe",
                    id: "456",
                    image: [{ url: "/team-member.jpg" }],
                },
            ],
            isLoading: false,
            error: undefined,
        })

        render(<Product type="team" />)

        // ✅ Header check
        expect(
            screen.getByText(/Meet Our Team of Innovative Interior Designers/i)
        ).toBeInTheDocument()

        // ✅ Image check
        await waitFor(() =>
            expect(screen.getByTestId("lazyImage")).toBeInTheDocument()
        )

        // ✅ Name check
        expect(screen.getByLabelText(/Name:John Doe/i)).toBeInTheDocument()
    })

    it("shows loading message when data is loading", () => {
        ;(useSWR as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: undefined,
        })

        render(<Product type="products" />)
        expect(screen.getByText(/Loading products/i)).toBeInTheDocument()
    })

    it("shows error message when fetch fails", () => {
        ;(useSWR as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error("Network Error"),
        })

        render(<Product type="team" />)
        expect(screen.getByText(/Error loading team data/i)).toBeInTheDocument()
    })

    it("renders nothing if product has no image", async () => {
        ;(useSWR as jest.Mock).mockReturnValue({
            data: [{ title: "No Image Product" }],
            isLoading: false,
            error: undefined,
        })

        render(<Product type="products" />)
        await waitFor(() =>
            expect(screen.queryByTestId("lazyImage")).not.toBeInTheDocument()
        )
    })
})
