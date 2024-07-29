import { ItemSkeleton } from "@app/items/[id]/components";
import { render } from "@test-utils";

describe("ItemSkeleton tests:", () => {
  it("When it is rendered, then 12 span are rendered", () => {
    const { container } = render(<ItemSkeleton />);

    const spans = container.querySelectorAll("span");

    expect(spans.length).toEqual(12);
  });
});
