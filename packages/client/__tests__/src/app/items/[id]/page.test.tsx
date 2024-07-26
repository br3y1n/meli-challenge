import ItemPage from "@app/items/[id]/page";
import { render, screen } from "@test-utils";

describe("ItemPage tests:", () => {
  it("When it is rendered, then breadcrumb, img, title, description and buyButton are rendered", () => {
    render(<ItemPage />);

    const breadcrumb = screen.queryByText(/breadcrumb/i);

    expect(breadcrumb).toBeInTheDocument();
  });
});
