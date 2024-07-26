import { IPaginationProps, Pagination } from "@components/Pagination";
import { render, screen, userEvent } from "@test-utils";

describe("Pagination tests:", () => {
  const nextLabel = "Siguiente";
  const backLabel = "Anterior";
  const pointsLabel = "...";

  const renderCases: { props: IPaginationProps; expected: string[] }[] = [
    {
      props: { currentPage: 1, numberPages: 10 },
      expected: ["1", "2", "3", pointsLabel, "10", nextLabel],
    },
    {
      props: { currentPage: 5, numberPages: 10 },
      expected: [
        backLabel,
        "1",
        pointsLabel,
        "4",
        "5",
        "6",
        pointsLabel,
        "10",
        nextLabel,
      ],
    },
    {
      props: { currentPage: 6, numberPages: 12, maxVisibleButtons: 4 },
      expected: [
        backLabel,
        "1",
        pointsLabel,
        "4",
        "5",
        "6",
        "7",
        pointsLabel,
        "12",
        nextLabel,
      ],
    },
    {
      props: { currentPage: 12, numberPages: 12, maxVisibleButtons: 2 },
      expected: [backLabel, "1", pointsLabel, "11", "12"],
    },
    {
      props: { currentPage: 1, numberPages: 2 },
      expected: ["1", "2", nextLabel],
    },
    {
      props: { currentPage: 2, numberPages: 2 },
      expected: [backLabel, "1", "2"],
    },
    {
      props: { currentPage: 1, numberPages: 1 },
      expected: ["1"],
    },
  ];

  renderCases.forEach(({ props, expected }) => {
    it(`When it's rendered with props => ${JSON.stringify(props)}, then buttons are displayed like this <<${expected.join(",")}>>`, () => {
      const { container } = render(<Pagination {...props} />);

      expect(container.textContent).toEqual(expected.join(""));
    });
  });

  const onChangeCases: {
    target: string;
    currentPage: number;
    expected: number;
  }[] = [
    { currentPage: 1, expected: 10, target: "10" },
    { currentPage: 5, expected: 6, target: nextLabel },
    { currentPage: 6, expected: 5, target: backLabel },
    { currentPage: 10, expected: 1, target: "1" },
    { currentPage: 5, expected: 6, target: "6" },
  ];

  onChangeCases.forEach(({ currentPage, expected, target }) => {
    const onChange = jest.fn();

    it(`When it's rendered with pages:10, currentPage:${currentPage} and button:${target} is clicked, then onChange is called with ${expected}`, async () => {
      render(
        <Pagination
          currentPage={currentPage}
          onChange={onChange}
          numberPages={10}
        />
      );

      const button = screen.getByText(target);

      await userEvent.click(button);

      expect(onChange).toHaveBeenCalledWith(expected);
    });
  });
});
