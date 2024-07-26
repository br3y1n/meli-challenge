import { asyncHandler } from "@/shared/infrastructure/asyncHandler";
import { Router } from "express";
import { ExpressProductController } from "./ExpressProductController";

const controller = new ExpressProductController();
const ExpressProductRouter = Router();

ExpressProductRouter.get("/items", asyncHandler(controller.getAll));
ExpressProductRouter.get("/items/:id", asyncHandler(controller.getOneById));

export { ExpressProductRouter };
