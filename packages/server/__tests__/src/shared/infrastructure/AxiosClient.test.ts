import { axiosClient } from "@/shared/infrastructure/AxiosClient";

describe("axiosClient tests:", () => {
  it("should have the correct baseURL", () => {
    expect(axiosClient.defaults.baseURL).toBe(process.env.MELI_API);
  });

  it("should have the correct headers", () => {
    expect(axiosClient.defaults.headers["Content-Type"]).toBe(
      "application/json"
    );
  });
});
