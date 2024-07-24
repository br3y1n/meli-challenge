import { server } from "@/server";
import request from "supertest";

describe("server test", () => {
  it("should return 404 for non-existent routes", async () => {
    const response = await request(server).get("/non-existent");
    expect(response.status).toBe(404);
  });
});

afterAll((done) => {
  server.close(done);
});
