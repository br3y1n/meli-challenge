import express, { json } from "express";
import { defineRoutes } from "./ExpressRouter";

const startApi = () => {
  const app = express();
  app.use(json());
  defineRoutes(app);

  return app;
};

export default startApi;
