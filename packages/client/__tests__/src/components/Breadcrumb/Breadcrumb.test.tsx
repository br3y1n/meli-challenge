import { Breadcrumb } from "@components/Breadcrumb";
import { render, userEvent } from "@test-utils";

describe("Breadcrumb tests:", () => {
  it("When it's rendered with items prop empty, then no achor is rendered", () => {
    const { container } = render(<Breadcrumb items={[]} />);

    const anchors = container.querySelectorAll("a");

    expect(anchors).toHaveLength(0);
  });

  it("When it's rendered with 1 item, then 1 anchor is renderd and no divider", () => {
    const { container } = render(<Breadcrumb items={[{ label: "label 1" }]} />);

    const anchors = container.querySelectorAll("a");
    const divider = container.querySelectorAll("svg");

    expect(anchors).toHaveLength(1);
    expect(divider).toHaveLength(0);
  });

  it("When it's rendered with multiple items, then multiple anchors and dividers are renderd", () => {
    const items = [
      { label: "label 1" },
      { label: "label 2" },
      { label: "label 3" },
    ];
    const { container } = render(<Breadcrumb items={items} />);

    const anchors = container.querySelectorAll("a");
    const divider = container.querySelectorAll("svg");

    expect(anchors).toHaveLength(items.length);
    expect(divider).toHaveLength(items.length - 1);
  });

  it("When anchor is clicked, then onClick is called 1 time", async () => {
    const onClick = jest.fn();
    const { container } = render(
      <Breadcrumb items={[{ label: "label 1", onClick }]} />
    );

    const anchor = container.querySelector("a");

    expect(onClick).toHaveBeenCalledTimes(0);

    await userEvent.click(anchor!);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
