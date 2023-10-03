import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CheckValidation from "../../components/CheckValidation/CheckValidation";

describe("CheckValidation", () => {
  it("renders a label prop", () => {
    render(<CheckValidation label="Test Validation" />);
    const label = screen.getByText("Test Validation");
    expect(label).toBeInTheDocument();
  });

  it("renders the check mark Image when isValid prop is false", () => {
    render(<CheckValidation label="Test Validation" isValid={true} />);
    const image = screen.getByAltText("check_mark");
    expect(image).toBeInTheDocument();
  });

  it("renders the check mark Image when isValid prop is false", () => {
    render(<CheckValidation label="Test Validation" isValid={false} />);
    const image = screen.getByAltText("x_mark");
    expect(image).toBeInTheDocument();
  });
});
