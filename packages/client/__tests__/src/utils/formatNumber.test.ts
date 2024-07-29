import { formatNumber } from "@utils/formatNumber";

describe("formatNumber tests:", () => {
  const cases: [number, string][] = [
    [1000, "1.000"],
    [10, "10"],
    [9456132, "9.456.132"],
  ];

  cases.forEach(([num, expected]) => {
    it(`When formatNumber is called with ${num}, then it return ${expected}`, () => {
      expect(formatNumber(num)).toEqual(expected);
    });
  });
});
