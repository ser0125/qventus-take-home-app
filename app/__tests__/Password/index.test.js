import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { passwordReqs } from "../../page";
import Password from "../../components/Password/Password";

describe("Password", () => {
  it("renders the label passed on the passwordReqs", () => {
    const newPassReq = [...passwordReqs, { id: 4, label: "Test Requirement" }];
    render(<Password passwordReqs={newPassReq} />);

    const label = screen.getByText("Test Requirement");

    expect(label).toBeInTheDocument();
  });

  it("renders the checkmark for a new obj in passwordReqs when the validation for 'has-number' is correct", () => {
    const newPassReq = [
      { id: 4, label: "Test Requirement", validation: "has-number" },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123" } });
    const image = screen.getByAltText("check_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the xmark for a new obj in passwordReqs when the validation for 'has-number' is incorrect", () => {
    const newPassReq = [
      { id: 4, label: "Test Requirement", validation: "has-number" },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "as" } });
    const image = screen.getByAltText("x_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the checkmark for a new obj in passwordReqs when the validation for 'has-special-char' is correct", () => {
    const newPassReq = [
      { id: 4, label: "Test Requirement", validation: "has-special-char" },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123*" } });
    const image = screen.getByAltText("check_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the xmark for a new obj in passwordReqs when the validation for 'has-special-charr' is incorrect", () => {
    const newPassReq = [
      { id: 4, label: "Test Requirement", validation: "has-special-char" },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123" } });
    const image = screen.getByAltText("x_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the checkmark for a new obj in passwordReqs when the validation for 'has-uppercase-letter' is correct", () => {
    const newPassReq = [
      { id: 4, label: "Test Requirement", validation: "has-uppercase-letter" },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123*S" } });
    const image = screen.getByAltText("check_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the xmark for a new obj in passwordReqs when the validation for 'has-uppercase-letter' is incorrect", () => {
    const newPassReq = [
      { id: 4, label: "Test Requirement", validation: "has-uppercase-letter" },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123as" } });
    const image = screen.getByAltText("x_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the checkmark for a new obj in passwordReqs when the validation for 'no-consecutive-letters' is correct", () => {
    const newPassReq = [
      {
        id: 4,
        label: "Test Requirement",
        validation: "no-consecutive-letters",
      },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a1s2b3" } });
    const image = screen.getByAltText("check_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the xmark for a new obj in passwordReqs when the validation for 'no-consecutive-letters' is incorrect", () => {
    const newPassReq = [
      {
        id: 4,
        label: "Test Requirement",
        validation: "no-consecutive-letters",
      },
    ];
    render(<Password passwordReqs={newPassReq} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123as" } });
    const image = screen.getByAltText("x_mark");
    expect(image).toBeInTheDocument();
  });
});
