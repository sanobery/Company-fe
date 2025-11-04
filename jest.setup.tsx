import "@testing-library/jest-dom"

// Mock Next.js Image (simulate LazyImage)
jest.mock("@/components/common/LazyImage", () => ({
    __esModule: true,
    default: ({ src, alt }: { src: string; alt: string }) => (
        <img data-testid="lazyImage" src={src} alt={alt} />
    ),
}))

// --- ✅ Mock react-hot-toast ---
jest.mock("react-hot-toast", () => ({
    __esModule: true,
    error: jest.fn(), // prevents actual toast UI rendering
    success: jest.fn(),
}))

jest.mock("@/components/shared/animatedItem", () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
    ),
}))

jest.mock("react-awesome-reveal", () => ({
    __esModule: true,
    Fade: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
    ),
    Slide: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="slideMock">{children}</div>
    ),
}))

jest.mock("swr")

jest.mock("framer-motion", () => ({
    motion: { div: (props: any) => <div {...props} /> },
}))
