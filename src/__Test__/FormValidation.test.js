import Form from "../Pages/Common/Form";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const FNAME = "fname";
const LNAME = "lname";
const EMAIL = "email";
const PHONE = "phone";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Form validation", () => {
  it("Shows error message if first name is invalid", () => {
    const { getByTestId } = render(<Form />);
    const firstName = getByTestId(FNAME);
    fireEvent.change(firstName, { target: { value: "J0hn" } });
    const errorMessage = getByTestId("first-name-error");
    expect(errorMessage).toHaveTextContent("Invalid name!");
  });

  it("Shows error message if last name is invalid", () => {
    const { getByTestId } = render(<Form />);
    const lastName = getByTestId(LNAME);
    fireEvent.change(lastName, { target: { value: "D0e" } });
    const errorMessage = getByTestId("last-name-error");
    expect(errorMessage).toHaveTextContent("Invalid name!");
  });

  it("Shows error message if email is invalid", () => {
    const { getByTestId } = render(<Form />);
    const email = getByTestId(EMAIL);
    fireEvent.change(email, { target: { value: "thisisaneamil@" } });
    const errorMessage = getByTestId("email-error");
    expect(errorMessage).toHaveTextContent("Invalid email!");
  });

  it("Shows error message if phone number is invalid", () => {
    const { getByTestId } = render(<Form />);
    const phone = getByTestId(PHONE);
    fireEvent.change(phone, { target: { value: "123e4567" } });
    const errorMessage = getByTestId("phone-number-error");
    expect(errorMessage).toHaveTextContent("Invalid phone number!");
  });

  it("Shows error message if first name is empty", () => {
    const { getByTestId } = render(<Form />);
    const firstName = getByTestId(FNAME);
    fireEvent.change(firstName, { target: { value: " " } });
    const errorMessage = getByTestId("first-name-error");
    expect(errorMessage).toHaveTextContent("First name is required");
  });

  it("Shows error message if last name is empty", () => {
    const { getByTestId } = render(<Form />);
    const lastName = getByTestId(LNAME);
    fireEvent.change(lastName, { target: { value: " " } });
    const errorMessage = getByTestId("last-name-error");
    expect(errorMessage).toHaveTextContent("Last name is required");
  });

  it("Shows error message if first name is empty", () => {
    const { getByTestId } = render(<Form />);
    const email = getByTestId(EMAIL);
    fireEvent.change(email, { target: { value: " " } });
    const errorMessage = getByTestId("email-error");
    expect(errorMessage).toHaveTextContent("Email is required");
  });

  it("Shows error message if first name is empty", () => {
    const { getByTestId } = render(<Form />);
    const phone = getByTestId(PHONE);
    fireEvent.change(phone, { target: { value: " " } });
    const errorMessage = getByTestId("phone-number-error");
    expect(errorMessage).toHaveTextContent("Phone number is required");
  });
});
