import ItemsPage from "@app/items/page";
import { render, screen } from "@test-utils";

describe("ItemsPage tests:", () => {
  it("When it is rendered, then breadcrumb, sort select, list, pagination and limit select are rendered", () => {
    render(<ItemsPage />);

    const breadcrumb = screen.queryByText(/breadcrumb/i);
    const sortSelect = screen.queryByText(/ordenar por/i);

    expect(breadcrumb).toBeInTheDocument();
    expect(sortSelect).toBeInTheDocument();
  });
});
