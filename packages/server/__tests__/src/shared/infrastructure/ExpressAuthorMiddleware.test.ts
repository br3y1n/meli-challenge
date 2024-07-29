import { ExpressAuthorMiddleware } from "@/shared/infrastructure/ExpressAuthorMiddleware";
import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(ExpressAuthorMiddleware);

app.get("/test", (_, res) => {
  res.json({ message: "Hello, World!" });
});

describe("ExpressAuthorMiddleware tests:", () => {
  beforeEach(() => {
    process.env.SIGNATURE_NAME = "Brayayin";
    process.env.SIGNATURE_LAST_NAME = "Super";
  });

  afterEach(() => {
    delete process.env.SIGNATURE_NAME;
    delete process.env.SIGNATURE_LAST_NAME;
  });

  test("should add author to the response body", async () => {
    const response = await request(app).get("/test");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("author");
    expect(response.body.author).toEqual({
      name: "Brayayin",
      lastname: "Super",
    });
    expect(response.body).toHaveProperty("message", "Hello, World!");
  });

  test("should handle non-object responses correctly", async () => {
    app.get("/test-primitive", (req, res) => {
      res.json("Just a string");
    });

    const response = await request(app).get("/test-primitive");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("author");
    expect(response.body.author).toEqual({
      name: "Brayayin",
      lastname: "Super",
    });
    expect(response.body).toHaveProperty("data", "Just a string");
  });
});
