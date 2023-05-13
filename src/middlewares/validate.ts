import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import statusCode from "../constants/statusCode";

const validation = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next({ error: errors.array(), status: statusCode.HTTP_BAD_REQUEST });
  }

  next();
};

export default validation;
