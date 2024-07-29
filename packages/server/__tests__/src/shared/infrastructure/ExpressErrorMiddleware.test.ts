import { ExpressErrorMiddleware } from "@/shared/infrastructure/ExpressErrorMiddleware";
import { logger } from "@/shared/infrastructure/WinstonLogger";
import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());

app.get("/error", (_, __, next) => {
  const error = new Error("Something went wrong!");
  (error as any).statusCode = 400;
  next(error);
});

app.get("/error-default", (_, __, next) => {
  next(new Error());
});

app.use(ExpressErrorMiddleware);

jest.mock("@/shared/infrastructure/WinstonLogger", () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
  },
}));

describe("ExpressErrorMiddleware tests:", () => {
  test("should handle errors and return a JSON response with error details", async () => {
    const response = await request(app).get("/error");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: "error",
      statusCode: 400,
      message: "Something went wrong!",
    });

    expect(logger.info).toHaveBeenCalledWith("HandleErrorMiddleware");
    expect(logger.error).toHaveBeenCalledWith(expect.any(Error));
  });

  test("should handle errors with default status code and message", async () => {
    const response = await request(app).get("/error-default");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      status: "error",
      statusCode: 500,
      message: "Internal Server Error",
    });

    expect(logger.info).toHaveBeenCalledWith("HandleErrorMiddleware");
    expect(logger.error).toHaveBeenCalledWith(expect.any(Error));
  });
});
