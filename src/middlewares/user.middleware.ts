import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";
import { ApiError } from "../errors/api.error";

class UserMiddleware {
  public async findByIdOrThrow(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const user = users[+id];

      if (!user) {
        // throw new Error("User not found");
        throw new ApiError("User not found", 400);
      }
      next();
    } catch (e) {
      // res.json({
      //   message: (e as Error).message,
      //   status: 400,
      // });
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();
