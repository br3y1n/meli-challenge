import { Header } from "@components/Header";
import { render, screen } from "@test-utils";

describe("Header tests:", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("when it is rendered, then 1 img and 1 input ared rendered", () => {
    const logo = screen.getByRole("img");
    const input = screen.getByPlaceholderText(/buscar/i);

    expect(logo).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
