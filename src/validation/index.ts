import { body } from "express-validator";

export const createProfileValidation = [
  body("name").exists().isString(),
  body("nickname").optional().isString(),
  body("email").isEmail().exists(),
  body("capital").isNumeric().optional(),
  body("divisa").isString().optional(),
  body("prefered_cryptocurrency").isString().optional(),
];

export const createSimulatorValidation = [
  body("dateRecorded").isDate().optional(),
  body("cryptocurrency").isString().optional(),
  body("euros").isNumeric().optional(),
  body("price").isNumeric().optional(),
  body("quantity").isNumeric().optional(),
];
