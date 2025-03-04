import express, { NextFunction } from "express";
import { Request, Response } from "express";

import { ApiError } from "./errors/api.error";
import { userRouter } from "./routers/user.router";
// import * as mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use("/users", userRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = err?.status || 500;
  res.status(status).json({
    message: err?.message || "Internal Server Error",
    status,
  });
});

const PORT = 5100;

app.listen(PORT, () => {
  // mongoose.connect("mongodb://127.0.0.1:27017");
  console.log(`Server has started on PORT ${PORT}`);
});
