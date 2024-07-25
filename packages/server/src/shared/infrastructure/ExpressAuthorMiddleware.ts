import { NextFunction, Request, Response } from "express";
import { logger } from "./WinstonLogger";

interface IAuthor {
  name: string;
  lastname: string;
}

const ExpressAuthorMiddleware = (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("ExpressAuthorMiddleware init");

  const originalJson = res.json;
  const author: IAuthor = {
    name: process.env.SIGNATURE_NAME!,
    lastname: process.env.SIGNATURE_LAST_NAME!,
  };

  res.json = function (body: unknown): Response {
    logger.info("ExpressAuthorMiddleware - sign");

    const newBody =
      typeof body === "object" ? { ...body, author } : { author, data: body };

    return originalJson.call(this, newBody);
  };

  next();
};

export { ExpressAuthorMiddleware };
