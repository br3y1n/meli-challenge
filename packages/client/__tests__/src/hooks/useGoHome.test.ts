import { useGoHome } from "@hooks/useGoHome";
import { renderHook } from "@test-utils";
import { useRouter } from "next/navigation";

describe("useGoHome tests:", () => {
  it("when it is called, then it return a state", () => {
    (useRouter as jest.Mock).mockReturnValue({});
    const { result } = renderHook(() => useGoHome());

    expect(result.current).toEqual({
      router: expect.any(Object),
      goHome: expect.any(Function),
    });
  });

  it("when goHome is called, then push is called with '/'", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    const { result } = renderHook(() => useGoHome());

    result.current.goHome();

    expect(push).toHaveBeenCalledWith("/");
  });
});
