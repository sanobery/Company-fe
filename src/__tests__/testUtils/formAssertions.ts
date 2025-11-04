// test-utils/formAssertions.ts
import { fireEvent, screen } from "@testing-library/react"

export const getContactFormFields = () => {
    const usernameInput = screen.getByPlaceholderText(/your full username/i)
    const phoneInput = screen.getByPlaceholderText(/e\.g\. \+91 9876543210/i)
    const emailInput = screen.getByPlaceholderText(/you@example\.com/i)
    const submitButton = screen.getByRole("button", { name: /submit/i })

    // Assert they exist (optional)
    expect(usernameInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    // Return them for later use
    return { usernameInput, phoneInput, emailInput, submitButton }
}

export const testByInputValueInField = async () => {
    const { usernameInput, phoneInput, emailInput, submitButton } =
        getContactFormFields()
    // Simulate typing
    fireEvent.change(usernameInput, { target: { value: "Jane Doe" } })
    fireEvent.change(phoneInput, { target: { value: "+91 9876543210" } })
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } })

    // Assert values changed
    expect(usernameInput).toHaveValue("Jane Doe")
    expect(phoneInput).toHaveValue("+91 9876543210")
    expect(emailInput).toHaveValue("jane@example.com")

    // Optional: submit form
    fireEvent.click(submitButton)
}
