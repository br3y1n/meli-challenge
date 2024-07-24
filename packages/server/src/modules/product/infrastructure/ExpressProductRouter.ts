import { Router } from "express";
import { ExpressProductController } from "./ExpressProductController";

const controller = new ExpressProductController();
const ExpressProductRouter = Router();

ExpressProductRouter.get("/items", controller.getAllByTitle);
ExpressProductRouter.get("/items/:id", controller.getOneById);

export { ExpressProductRouter };
