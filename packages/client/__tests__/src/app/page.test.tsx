import HomePage from "@app/page";
import { render, screen } from "@test-utils";

describe("Home tests:", () => {
  it("should be render home page", () => {
    render(<HomePage />);

    const titleTxt = screen.getByRole("heading", {
      level: 2,
      name: /welcome/i,
    });

    expect(titleTxt).toBeInTheDocument();
  });
});
