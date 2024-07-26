import { Link } from "@components/Link";
import { render, screen } from "@test-utils";

describe("Link tests:", () => {
  it("When it's rendered, then it has className text-gray-light ", () => {
    render(<Link>link</Link>);

    const link = screen.getByText("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("text-gray-light");
  });
});
