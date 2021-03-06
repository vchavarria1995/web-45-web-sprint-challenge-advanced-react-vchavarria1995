import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText("Checkout Form")
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText("First Name:")
    userEvent.type(firstName, "Victor")

    const lastName = screen.getByLabelText("Last Name:")
    userEvent.type(lastName, "Chavarria")

    const address = screen.getByLabelText("Address:")
    userEvent.type(address, "2530 S Camden PKWY")

    const city = screen.getByLabelText("City:")
    userEvent.type(city, "Houston")

    const state = screen.getByLabelText("State:")
    userEvent.type(state, "Texas")

    const zipcode = screen.getByLabelText("Zip:")
    userEvent.type(zipcode, '77067')

    const checkout = screen.getByRole("button")
    userEvent.click(checkout)

    const confirmation = screen.getByTestId("successMessage")
    expect(confirmation).toBeInTheDocument()
});
