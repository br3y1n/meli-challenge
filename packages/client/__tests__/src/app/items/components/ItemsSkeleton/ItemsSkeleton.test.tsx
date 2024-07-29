import { ItemsSkeleton } from "@app/items/components";
import { render } from "@test-utils";

describe("ItemsSkeleton tests:", () => {
  it("When it is rendered, then 20 span are rendered", () => {
    const { container } = render(<ItemsSkeleton />);

    const spans = container.querySelectorAll("span");

    expect(spans.length).toEqual(20);
  });
});
