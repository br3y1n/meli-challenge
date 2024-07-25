import { Main } from "@components/Main";
import { render, screen } from "@test-utils";

describe("Main tests:", () => {
  it("When it is rendered, then a children is rendered inside main tag", () => {
    render(
      <Main>
        <h1>Children</h1>
      </Main>
    );

    const main = screen.getByRole("main");
    const children = screen.getByText("Children");

    expect(main).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
