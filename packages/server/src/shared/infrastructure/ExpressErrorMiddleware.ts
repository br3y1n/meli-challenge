import { NextFunction, Request, Response } from "express";
import { logger } from "./WinstonLogger";

const ExpressErrorMiddleware = (
  err: Error & { statusCode?: number },
  _: Request,
  res: Response,
  __: NextFunction
) => {
  logger.info("HandleErrorMiddleware");
  logger.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export { ExpressErrorMiddleware };
