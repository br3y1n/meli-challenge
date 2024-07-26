import { Button, ButtonVariantEnum } from "@components/Button";
import { render, screen } from "@test-utils";

describe("Button tests:", () => {
  const cases: [ButtonVariantEnum, string][] = [
    [ButtonVariantEnum.PRIMARY, "bg-blue-light"],
    [ButtonVariantEnum.DEFAULT, "text-gray-light"],
    [ButtonVariantEnum.DEFAULT_PRIMARY_PALE, "hover:bg-blue-pale-dark"],
    [ButtonVariantEnum.PRIMARY_PALE, "bg-blue-pale-light"],
    [ButtonVariantEnum.PRIMARY_PALE_GHOST, "bg-white"],
  ];

  cases.forEach(([variant, expected]) => {
    it(`When the button is rendered with ${variant} variant, then it has className ${expected}`, () => {
      render(<Button variant={variant}>button</Button>);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(expected);
    });
  });

  it("When the button is renderd with leftContent prop, then that content is displayed on the left", () => {
    render(<Button leftContent={"left "}>button</Button>);

    const button = screen.getByText("left button");

    expect(button).toBeInTheDocument();
  });

  it("When the button is rendered with rightContent prop, then that content is displayed on the right", () => {
    render(<Button rightContent={" right"}>button</Button>);

    const button = screen.getByText("button right");

    expect(button).toBeInTheDocument();
  });
});
