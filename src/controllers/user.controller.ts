import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";

// interface IUser {
//   name: string;
//   age: number;
//   gender: string;
// }

class UserController {
  public async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json(users);
    } catch (e) {
      // res.json({
      //   message: "Something went wrong",
      //   status: 400,
      // });
      next(e);
    }
  }

  public create(req: Request, res: Response) {
    const hubkaBob = req.body;
    users.push(hubkaBob);

    res.status(201).json({ message: "Hubka Bob created" });
  }

  public async updateById(req: Request, res: Response) {
    console.log(req.params);
    const { id } = req.params;
    const updatedHubka = req.body;

    users[+id] = updatedHubka;
    res.status(200).json({
      message: "Hubka Bob updated successfully",
      data: users[+id],
    });
  }

  public async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    users.splice(+id, 1);

    res.status(200).json({
      message: "Hubka Bob deleted",
      data: users[+id],
    });
  }
}

export const userController = new UserController();
