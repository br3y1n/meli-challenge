import { ExpressProductRouter } from "@modules/product/infrastructure/ExpressProductRouter";
import { Express } from "express";

const defineRoutes = (app: Express) => {
  app.use("/api", ExpressProductRouter);
};

export { defineRoutes };
