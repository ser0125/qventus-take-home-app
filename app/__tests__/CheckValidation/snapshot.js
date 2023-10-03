import { render } from "@testing-library/react";
import CheckValidation from "../../components/CheckValidation/CheckValidation";

it("renders checkvalidation unchanged", () => {
  const { container } = render(<CheckValidation />);
  expect(container).toMatchSnapshot();
});
