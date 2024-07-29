import ItemPage from "@app/items/[id]/page";
import { meliClient } from "@lib/Axios";
import { act, render, screen, userEvent, waitFor } from "@test-utils";
import { useParams, useRouter } from "next/navigation";

const getMock = jest.spyOn(meliClient, "get");

const response = {
  item: {
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
    description: "una descripcion",
  },
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
};

describe("ItemPage tests:", () => {
  (useParams as jest.Mock).mockReturnValue({ id: "123" });

  it("When it is rendered, then skeleton is rendered with 12 span", () => {
    const { container } = render(<ItemPage />);

    const spans = container.querySelectorAll("span");

    expect(spans.length).toEqual(12);
  });

  it("When the API return a error, then error message is rendered", async () => {
    getMock.mockRejectedValue(new Error("Error"));

    render(<ItemPage />);

    await waitFor(() => {
      const logo = screen.getByRole("img");
      const title = screen.getByText(/ha ocurrido un error/i);
      const description = screen.getByText(/estamos trabajando/i);

      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  it("When the API return empty data, then error message is rendered", async () => {
    getMock.mockResolvedValue({
      data: {
        item: null,
        categories: [],
      },
    });

    render(<ItemPage />);

    await waitFor(() => {
      const logo = screen.getByRole("img");
      const title = screen.getByText(/ha ocurrido un error/i);
      const description = screen.getByText(/estamos trabajando/i);

      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  it("When the API return data, then 1 img, 1 buy button, 1 description , 1 condition and 1 price are rendered", async () => {
    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemPage />);

    await waitFor(() => {
      const item = screen.getByText(/item 1/i);
      const descriptionTitle = screen.getByText(/Descripción del producto/i);
      const description = screen.getByText(/Una descripcion/i);
      const condition = screen.getByText(/nuevo/i);
      const price = screen.getByText(/1.231/i);
      const buyButton = screen.getByText(/comprar/i);

      expect(item).toBeInTheDocument();
      expect(descriptionTitle).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(condition).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(buyButton).toBeInTheDocument();
    });
  });

  it("When condition isn't mapped, then the condition is rendered as is", async () => {
    getMock.mockResolvedValue({
      data: {
        ...response,
        item: {
          ...response.item,
          condition: "xxx",
        },
      },
    });

    render(<ItemPage />);

    await waitFor(() => {
      const condition = screen.getByText(/xxx/i);

      expect(condition).toBeInTheDocument();
    });
  });

  it("When category is clicked, then push is called with category.id", async () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({ push });

    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemPage />);

    await waitFor(async () => {
      const category = screen.getByText(/category 1/i);

      await userEvent.click(category);

      expect(push).toHaveBeenLastCalledWith("/items?category=123");
    });
  });

  it("When buy button is clicked, then a buying button and then success message are rendered", async () => {
    jest.useFakeTimers();

    getMock.mockResolvedValue({
      data: response,
    });

    render(<ItemPage />);

    await waitFor(async () => {
      const button = screen.getByText(/comprar/i);

      await userEvent.click(button);
    });

    const buttonBuying = screen.getByText(/comprando.../i);

    expect(buttonBuying).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const successMessage = screen.getByText(/éxito/i);

    expect(successMessage).toBeInTheDocument();

    jest.useRealTimers();
  });
});
