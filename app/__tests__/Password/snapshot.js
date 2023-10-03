import { render } from "@testing-library/react";
import Password from "../../components/Password/Password";

it("renders password unchanged", () => {
  const { container } = render(<Password />);
  expect(container).toMatchSnapshot();
});
