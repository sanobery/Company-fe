import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import toast from "react-hot-toast"
import ContactService from "@/services/contact/contactService"
import ContactPage from "@/components/sections/contact/contactPage"
import {
    getContactFormFields,
    testByInputValueInField,
} from "../testUtils/formAssertions"

// ✅ Fix: define mock directly inside jest.mock so it's in scope during hoisting
jest.mock("react-hot-toast", () => ({
    __esModule: true,
    default: {
        success: jest.fn(),
        error: jest.fn(),
    },
}))

// 🧩 Mock ContactService
jest.mock("@/services/contact/contactService", () => ({
    __esModule: true,
    default: {
        createOne: jest.fn(),
    },
}))

const mockSetShowModal = jest.fn()

describe("ContactPage Component", () => {
    beforeEach(() => {
        jest.clearAllMocks()
        render(<ContactPage color="white" setShowModal={mockSetShowModal} />)
    })

    it("renders all input fields and submit button", () => {
        getContactFormFields()
    })

    it("shows validation errors when submitting empty form", async () => {
        fireEvent.click(screen.getByRole("button", { name: /submit/i }))

        await waitFor(() => {
            expect(screen.queryAllByLabelText("alert").length).toBeGreaterThan(
                0
            )
        })
    })

    // it("calls ContactService.createOne and closes modal on success", async () => {
    //     // 🧩 Mock the API call to resolve successfully
    //     ;(ContactService.createOne as jest.Mock).mockResolvedValueOnce(true)

    //     // 🧩 Fill out form fields
    //     await testByInputValueInField()

    //     // 🧩 Submit the form (this is CRUCIAL)
    //     const submitButton = screen.getByRole("button", { name: /submit/i })
    //     fireEvent.click(submitButton)

    //     // 🧩 Wait for async effect
    //     await waitFor(() => {
    //         expect(ContactService.createOne).toHaveBeenCalledTimes(1)
    //         expect(toast.success).toHaveBeenCalledWith(
    //             expect.stringMatching(/Message sent successfully!/i)
    //         )
    //         expect(mockSetShowModal).toHaveBeenCalledWith(false)
    //     })
    // })

    // it("shows error toast when ContactService.createOne fails", async () => {
    //     ;(ContactService.createOne as jest.Mock).mockResolvedValue(false)

    //     fireEvent.change(screen.getByPlaceholderText(/your full username/i), {
    //         target: { value: "John Doe" },
    //     })
    //     fireEvent.change(
    //         screen.getByPlaceholderText(/e\.g\. \+91 9876543210/i),
    //         {
    //             target: { value: "+919876543210" },
    //         }
    //     )
    //     fireEvent.change(screen.getByPlaceholderText(/you@example\.com/i), {
    //         target: { value: "john@example.com" },
    //     })

    //     fireEvent.click(screen.getByRole("button", { name: /submit/i }))

    //     await waitFor(() => {
    //         expect(toast.error).toHaveBeenCalledWith(
    //             expect.stringMatching(/failed/i)
    //         )
    //     })
    // })

    // it("shows error toast when API throws exception", async () => {
    //     ;(ContactService.createOne as jest.Mock).mockRejectedValue(
    //         new Error("Network error")
    //     )

    //     fireEvent.change(screen.getByPlaceholderText(/your full username/i), {
    //         target: { value: "Jane Doe" },
    //     })
    //     fireEvent.change(
    //         screen.getByPlaceholderText(/e\.g\. \+91 9876543210/i),
    //         {
    //             target: { value: "+911234567890" },
    //         }
    //     )
    //     fireEvent.change(screen.getByPlaceholderText(/you@example\.com/i), {
    //         target: { value: "jane@example.com" },
    //     })

    //     fireEvent.click(screen.getByRole("button", { name: /submit/i }))

    //     await waitFor(() => {
    //         expect(toast.error).toHaveBeenCalledWith(
    //             expect.stringMatching(/error/i)
    //         )
    //     })
    // })
})
