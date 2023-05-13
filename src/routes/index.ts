import { Router } from "express";
import { router as favoriteRouter } from "./favorite.router";
import { router as profileRouter } from "./profile.router";
import { router as simulatorRouter } from "./simulator.router";

export const router = Router();

router.use("/favorite", favoriteRouter);
router.use("/profile", profileRouter);
router.use("/simulator", simulatorRouter);
