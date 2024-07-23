import { app, server } from "@/server";
import request from "supertest";

describe("GET /", () => {
  it("shouldn't respond", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(404);
  });
});

afterAll((done) => {
  server && server.close(done);
});
