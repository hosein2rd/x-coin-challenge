import { Router } from "express";
import { Profile } from "../models/Profile";
import statusCode from "../constants/statusCode";
import { createProfileValidation } from "../validation";
import validate from "../middlewares/validate";

export const router = Router();

router.get("/", async (req, res) => {
  const profile = await Profile.find().lean();

  res.json({ profile });
});

router.post("/", createProfileValidation, validate, async (req, res) => {
  const { email, name, nickname } = req.body;

  let profile = await Profile.findOne({
    $or: [{ email }, { nickname }],
  }).exec();

  if (!profile) {
    profile = await Profile.create({ name, email, nickname });
  }

  res.status(statusCode.HTTP_CREATED).json(profile);
});
