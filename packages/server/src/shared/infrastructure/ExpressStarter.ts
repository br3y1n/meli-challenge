import cors from "cors";
import express, { json } from "express";
import { ExpressAuthorMiddleware } from "./ExpressAuthorMiddleware";
import { ExpressErrorMiddleware } from "./ExpressErrorMiddleware";
import { defineRoutes } from "./ExpressRouter";

const startApi = () => {
  const app = express();

  app.use(json());
  app.use(cors());
  app.use(ExpressAuthorMiddleware);
  defineRoutes(app);
  app.use(ExpressErrorMiddleware);

  return app;
};

export default startApi;
