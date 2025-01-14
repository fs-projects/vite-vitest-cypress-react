import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    const { getByTestId } = render(<App />);
    // screen.debug(); // prints out the jsx in the App component unto the command line
    expect(getByTestId("counter")).toBeInTheDocument();
  });
});
