import ItemsPage from "@app/items/page";
import { meliClient } from "@lib/Axios";
import { render, screen, userEvent, waitFor } from "@test-utils";
import { useRouter, useSearchParams } from "next/navigation";

const getMock = jest.spyOn(meliClient, "get");

const response = {
  items: [
    {
      id: "132",
      title: "Item 1",
      price: {
        currency: "COP",
        amount: 1231,
        decimals: 12,
      },
      picture: "http://picture.png",
      condition: "new",
      free_shipping: true,
    },
  ],
  categories: [
    {
      id: "123",
      name: "Category 1",
    },
    {
      id: "456",
      name: "Category 2",
    },
    {
      id: "789",
      name: "Category 3",
    },
  ],
  pagination: {
    offset: 0,
    total: 1000,
    max_items: 1000,
    limit: 4,
  },
};

describe("ItemsPage tests:", () => {
  it("When it is rendered, then skeleton is rendered with 20 span", () => {
    const { container } = render(<ItemsPage />);

    const spans = container.querySelectorAll("span");

    expect(spans.length).toEqual(20);
  });

  it("When the API return a error, then error message is rendered", async () => {
    getMock.mockRejectedValue(new Error("Error"));

    render(<ItemsPage />);

    await waitFor(() => {
      const logo = screen.getByRole("img");
      const title = screen.getByText(/ha ocurrido un error/i);
      const description = screen.getByText(/estamos trabajando/i);

      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  it("When the API return empty data, then a empty text is rendered", async () => {
    getMock.mockResolvedValue({
      data: {
        items: [],
        categories: [],
        pagination: {},
      },
    });

    render(<ItemsPage />);

    await waitFor(() => {
      const emptyText = screen.getByText(/No se encontraron coincidencias/i);

      expect(emptyText).toBeInTheDocument();
    });
  });

  it("When the API return data, then all items, breadcrumb, sortSelect and pagination are rendered", async () => {
    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemsPage />);

    await waitFor(() => {
      const item = screen.getByText(/item 1/i);
      const breadcrumb = screen.getByText(/category 1/i);
      const pagination = screen.getByText(/Siguiente/i);

      expect(item).toBeInTheDocument();
      expect(breadcrumb).toBeInTheDocument();
      expect(pagination).toBeInTheDocument();
    });
  });

  it("When item is clicked, then push is called with item.id", async () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({ push });

    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemsPage />);

    await waitFor(async () => {
      const item = screen.getByText(/item 1/i);

      await userEvent.click(item);

      expect(push).toHaveBeenCalledWith("/items/132");
    });
  });

  it("When limit 8 is select, then pagination change from 250 to 125 pages", async () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("search=tester&category=555")
    );

    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemsPage />);

    await waitFor(async () => {
      const select = screen.getByText(/4/i);
      let buttonLastPage = screen.getByText(/250/i);

      expect(buttonLastPage).toBeInTheDocument();

      await userEvent.click(select);

      const option = screen.getByText(/8/i);

      await userEvent.click(option);

      buttonLastPage = screen.getByText(/125/i);

      expect(buttonLastPage).toBeInTheDocument();
    });
  });

  it("When category is clicked, then push is called with search empty", async () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({ push });

    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemsPage />);

    await waitFor(async () => {
      const category = screen.getByText(/category 1/i);

      await userEvent.click(category);

      expect(push).toHaveBeenCalledWith("/items?search=");
    });
  });
});
