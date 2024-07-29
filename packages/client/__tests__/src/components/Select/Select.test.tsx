import {
  ISelectProps,
  Select,
  SelectPostionEnum,
  SelectSizeEnum,
} from "@components/Select";
import { render, screen, userEvent } from "@test-utils";

describe("Select tests:", () => {
  const options: ISelectProps<number>["options"] = [
    { label: "Valor 1", value: 1 },
    { label: "Valor 2", value: 2 },
    { label: "Valor 3", value: 3 },
  ];

  it("When it's rendered with value 1, then 'Valor 1' is displayed ", () => {
    render(<Select options={options} value={1} />);

    const select = screen.getByText("Valor 1");

    expect(select).toBeInTheDocument();
  });

  it("When it's clicked, then 'Valor 2' and 'Valor 3' are displayed", async () => {
    render(<Select options={options} value={1} />);

    const select = screen.getByText("Valor 1");
    let option2 = screen.queryByText("Valor 2");
    let option3 = screen.queryByText("Valor 3");

    expect(select).toBeInTheDocument();
    expect(option2).not.toBeInTheDocument();
    expect(option3).not.toBeInTheDocument();

    await userEvent.click(select);

    option2 = screen.queryByText("Valor 2");
    option3 = screen.queryByText("Valor 3");

    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it("When it's clicked and then option 1 is clicked, then the list continues to unfold", async () => {
    render(<Select options={options} value={1} />);

    const select = screen.getByText("Valor 1");

    await userEvent.click(select);

    const [_, option1] = await screen.findAllByText("Valor 1")!;

    expect(option1).toBeInTheDocument();

    await userEvent.click(option1!);

    expect(option1).toBeInTheDocument();
  });

  it("When it's clicked and then option 2 is clicked, then onChange is called with 2", async () => {
    const onChange = jest.fn();
    render(<Select options={options} value={1} onChange={onChange} />);

    const select = screen.getByText("Valor 1");

    expect(select.textContent).toBe("Valor 1");

    await userEvent.click(select);

    const option2 = screen.getByText("Valor 2");

    expect(option2).toBeInTheDocument();

    await userEvent.click(option2!);

    expect(option2).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("When it's a value not found, then empty label is displayed", () => {
    const { container } = render(<Select options={options} value={0} />);

    expect(container.textContent).toBe("");
  });

  it("When it's rendered and press tab + enter, then list is displayed", async () => {
    render(<Select options={options} value={1} />);

    await userEvent.tab();
    await userEvent.keyboard("{enter}");

    const option2 = screen.getByText("Valor 2");

    expect(option2).toBeInTheDocument();
  });

  const positionCases: [SelectPostionEnum, string][] = [
    [SelectPostionEnum.BOTTOM, "top-full"],
    [SelectPostionEnum.TOP, "bottom-full"],
  ];

  positionCases.forEach(([position, expected]) => {
    it(`When it's rendered with position '${position}', then ul tag will have the class '${expected}'`, async () => {
      const { container } = render(
        <Select options={options} value={1} position={position} />
      );

      const select = screen.getByText("Valor 1");

      await userEvent.click(select);

      const list = container.querySelector("ul");

      expect(list).toHaveClass(expected);
    });
  });

  const sizeCases: [SelectSizeEnum, string][] = [
    [SelectSizeEnum.MD, "text-md"],
    [SelectSizeEnum.SM, "text-sm"],
  ];

  sizeCases.forEach(([size, expected]) => {
    it(`When it's rendered with size '${size}', then ul tag will have the class '${expected}'`, () => {
      render(<Select options={options} value={1} size={size} />);

      const select = screen.getByText("Valor 1");

      expect(select).toHaveClass(expected);
    });
  });
});
