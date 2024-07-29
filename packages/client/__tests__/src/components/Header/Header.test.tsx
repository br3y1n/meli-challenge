import { Header } from "@components/Header";
import { render, screen, userEvent } from "@test-utils";
import { useRouter, useSearchParams } from "next/navigation";

describe("Header tests:", () => {
  it("when it is rendered, then 1 img and 1 input are rendered", () => {
    render(<Header />);

    const logo = screen.getByRole("img");
    const input = screen.getByPlaceholderText(/buscar/i);

    expect(logo).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("when 'dog' is written in the input and then press enter, then router.push is called with '/items?search=dog'", async () => {
    const value = "dog";
    const push: jest.Mock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<Header />);

    const input = screen.getByPlaceholderText(/buscar/i);

    await userEvent.click(input);
    await userEvent.keyboard(`${value}{enter}`);

    expect(push).toHaveBeenCalledWith(`/items?search=${value}`);
  });

  it("when it is rendered with queryParam search=tester, then the input is rendered with value of tester", () => {
    const search = "tester";
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams(`search=${search}`)
    );

    render(<Header />);

    const input = screen.getByPlaceholderText<HTMLInputElement>(/buscar/i);

    expect(input.value).toEqual(search);
  });

  it("when 'cat' is written in the input, press enter and queryParam search change to dog, then input.value change from cat to dog", async () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());

    const { rerender } = render(<Header />);

    const input = screen.getByPlaceholderText<HTMLInputElement>(/buscar/i);

    await userEvent.click(input);
    await userEvent.keyboard("cat{enter}");

    expect(input.value).toEqual("cat");

    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams(`search=dog`)
    );

    rerender(<Header />);

    expect(input.value).toEqual("dog");
  });
});
