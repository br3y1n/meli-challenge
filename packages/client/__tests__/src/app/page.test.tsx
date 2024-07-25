import HomePage from "@app/page";
import { render, screen } from "@test-utils";

describe("Home tests:", () => {
  it("should be render home page", () => {
    render(<HomePage />);

    const titleTxt = screen.getByRole("heading", {
      level: 1,
      name: /welcome/i,
    });

    const image = screen.getByAltText("El Brayayin");
    const descriptionTxt = screen.getByText(/Hello everyone/i);

    expect(titleTxt).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(descriptionTxt).toBeInTheDocument();
  });
});
