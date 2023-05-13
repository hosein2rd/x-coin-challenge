import { Router } from "express";
import { Simulator } from "../models/Simulator";
import statusCode from "../constants/statusCode";
import validate from "../middlewares/validate";
import { createSimulatorValidation } from "../validation";

export const router = Router();

router.get("/", async (req, res) => {
  var simulator = await Simulator.find().lean();

  res.json({ simulator });
});

router.get("/:profile_id", async (req, res) => {
  const query = { profile_id: req.params.profile_id };
  const data = await Simulator.find(query).lean();

  res.json(data);
});

router.post(
  "/:profile_id",
  createSimulatorValidation,
  validate,
  async (req, res) => {
    const { profile_id } = req.params;

    const newData = {
      ...req.body,
      profile_id,
    };

    const simulator = await Simulator.create(newData);

    res.status(statusCode.HTTP_CREATED).json(simulator);
  }
);
