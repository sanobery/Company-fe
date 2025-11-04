/**
 * @fileoverview Unit tests for HomeClient component
 */
import { render, screen, waitFor } from "@testing-library/react"
import useSWR from "swr"
import HomeService from "@/services/home/homeService"
import "@testing-library/jest-dom"
import HomeClient from "@/components/sections/home/home"
import {
    ProcessProps,
    StepsProps,
    TestimonialsProps,
} from "@/types/companyInterface"

// Mock SWR — but we’ll use its real behavior for `useSWR`
jest.mock("swr")

// Mock all child components so we don’t test their internals
jest.mock("@/components/sections/home/hero", () => ({
    __esModule: true,
    default: ({ heading }: { heading: string }) => (
        <div data-testid="hero">Hero: {heading}</div>
    ),
}))
jest.mock("@/components/sections/product/product", () => ({
    __esModule: true,
    default: ({ type }: { type: string }) => (
        <div data-testid="product">Product type: {type}</div>
    ),
}))
jest.mock("@/components/sections/home/process", () => ({
    __esModule: true,
    default: ({ data }: { data: ProcessProps | null }) => (
        <div data-testid="process">Process: {JSON.stringify(data)}</div>
    ),
}))
jest.mock("@/components/sections/home/steps", () => ({
    __esModule: true,
    default: ({ data }: { data: StepsProps | null }) => (
        <div data-testid="steps">Steps: {JSON.stringify(data)}</div>
    ),
}))
jest.mock("@/components/sections/contact/ContactGaadi", () => ({
    __esModule: true,
    default: () => <div data-testid="contact">Contact</div>,
}))
jest.mock("@/components/sections/home/testimonials", () => ({
    __esModule: true,
    default: ({ testimonials }: { testimonials: TestimonialsProps | null }) => (
        <div data-testid="testimonials">
            Testimonials: {JSON.stringify(testimonials)}
        </div>
    ),
}))

// Mock HomeService
jest.mock("@/services/home/homeService")

describe("HomeClient Component", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("renders loading state initially", () => {
        // Mock useSWR to simulate loading state
        ;(useSWR as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
        })

        render(<HomeClient />)

        expect(
            screen.getByText(/Hero:\s*Loading Home... Please Wait !!!/i)
        ).toBeInTheDocument()
    })

    it("fetches data using HomeService.getAll()", async () => {
        const mockData = {
            hero: {
                heading: "Welcome",
                paragraph: "Hello world",
                image: { url: "/hero.jpg" },
            },
            stepSection: { step: "1" },
            processSection: { title: "Process" },
            testimonials: [{ name: "John" }],
        }

        ;(HomeService.getAll as jest.Mock).mockResolvedValue(mockData)
        ;(useSWR as jest.Mock).mockReturnValue({
            data: mockData,
            isLoading: false,
        })

        render(<HomeClient />)

        // Ensure each section is rendered with correct props
        await waitFor(() => {
            expect(screen.getByTestId("hero")).toHaveTextContent(
                "Hero: Welcome"
            )
            expect(screen.getByTestId("steps")).toBeInTheDocument()
            expect(screen.getByTestId("contact")).toBeInTheDocument()
            expect(screen.getByTestId("process")).toBeInTheDocument()
            expect(screen.getByTestId("product")).toHaveTextContent(
                "Product type: products"
            )
            expect(screen.getByTestId("testimonials")).toBeInTheDocument()
        })
    })

    it("renders even when some sections are missing", async () => {
        const partialData = {
            hero: { heading: "Only Hero" },
        }

        ;(useSWR as jest.Mock).mockReturnValue({
            data: partialData,
            isLoading: false,
        })

        render(<HomeClient />)

        await waitFor(() => {
            expect(screen.getByTestId("hero")).toHaveTextContent(
                "Hero: Only Hero"
            )
            expect(screen.getByTestId("product")).toBeInTheDocument()
        })
    })
})
