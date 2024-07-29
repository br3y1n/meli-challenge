import { BuySuccessMessage } from "@components/BuySuccessMessage";
import { render, screen } from "@test-utils";

describe("BuySuccessMessage tests:", () => {
  it("when it is rendered, then success message is rendered", () => {
    render(<BuySuccessMessage />);

    const title = screen.getByText(/Compra realizada con éxito/i);

    expect(title).toBeInTheDocument();
  });
});
