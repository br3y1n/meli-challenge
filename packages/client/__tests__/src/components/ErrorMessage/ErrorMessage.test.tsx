import { ErrorMessage } from "@components/ErrorMessage";
import { render, screen } from "@test-utils";

describe("ErrorMessage tests:", () => {
  it("when it is rendered, then 1 img and 2 texts are rendered", () => {
    render(<ErrorMessage />);

    const logo = screen.getByRole("img");
    const title = screen.getByText(/ha ocurrido un error/i);
    const description = screen.getByText(/estamos trabajando/i);

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
