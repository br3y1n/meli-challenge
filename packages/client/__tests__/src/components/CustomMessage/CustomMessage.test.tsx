import { CustomMessage } from "@components/CustomMessage";
import { render, screen } from "@test-utils";

describe("CustomMessage tests:", () => {
  it("when it is rendered, then 1 img and 1 text are rendered", () => {
    render(<CustomMessage text="text" image={<img />} />);

    const logo = screen.getByRole("img");
    const title = screen.getByText(/text/i);

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
