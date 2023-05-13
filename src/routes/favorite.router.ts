import { Router } from "express";
import { Favorite } from "../models/Favorite";

export const router = Router();

router.get("/", async (req, res) => {
  const favorite = await Favorite.find().lean();

  res.json({ favorite });
});

router.get("/:profile_id", async (req, res) => {
  const query = { profile_id: req.params.profile_id };
  const data = await Favorite.find(query).lean();

  res.json(data);
});
