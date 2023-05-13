import express from "express";
import { PORT, DBURL, CORS_ORIGINS } from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import expressWinston from "express-winston";
import winston from "winston";
import { router } from "./routes";
import statusCode from "./constants/statusCode";

// db connection
mongoose
  .connect(`${DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to DB ${DBURL}`);
  });

const app = express();

// handle CORS
app.use(cors({ origin: CORS_ORIGINS }));

// parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

expressWinston.requestWhitelist.push("body");

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    expressFormat: true,
  })
);

// import routes
app.use("/api", router);

app.use("*", (req, res, next) => {
  next({
    error: `${req.originalUrl} not found`,
    status: statusCode.HTTP_NOT_FOUND,
  });
});

// error handling
app.use((err, req, res, next) => {
  return res
    .status(err.status || statusCode.HTTP_INTERNAL_SERVER_ERROR)
    .json({ error: err.error || err });
});

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

app.listen(PORT, () =>
  console.log(`✅ Ready on port http://localhost:${PORT}`)
);
