import NotFound from "@app/not-found";
import { render, screen } from "@test-utils";

describe("NotFound tests:", () => {
  it("should be render not found page with 1 image, and 404 error", () => {
    render(<NotFound />);

    const image = screen.getByAltText("Brayayin searching");
    const errorCode = screen.getByText(/404/i);
    const descriptionTxt = screen.getByText(/página no encontrada/i);

    expect(image).toBeInTheDocument();
    expect(errorCode).toBeInTheDocument();
    expect(descriptionTxt).toBeInTheDocument();
  });
});
