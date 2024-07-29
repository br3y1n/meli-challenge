import { asyncHandler } from "@/shared/infrastructure/asyncHandler";
import { NextFunction, Request, Response } from "express";

describe("asyncHandler tests:", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {};
    mockNext = jest.fn();
  });

  it("should call the handler and pass the result to next if no error is thrown", async () => {
    const handler = async (_: Request, res: Response, __: NextFunction) => {
      res.send("Hello, World!");
    };

    const wrappedHandler = asyncHandler(handler);

    await wrappedHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockNext).toHaveBeenCalled();
  });

  it("should call next with an error if the handler throws an error", async () => {
    const error = new Error("Something went wrong");
    const handler = async (_: Request, __: Response, ___: NextFunction) => {
      throw error;
    };

    const wrappedHandler = asyncHandler(handler);

    await wrappedHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockNext).toHaveBeenCalledWith(error);
  });
});
