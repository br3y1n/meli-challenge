import RootLayout from "@app/layout";
import { render, screen } from "@test-utils";

describe("RootLayout tests:", () => {
  it("should be render 1 children inside", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <RootLayout>
        <h1>Children</h1>
      </RootLayout>
    );

    const children = screen.getByText("Children");

    expect(children).toBeInTheDocument();
  });
});
