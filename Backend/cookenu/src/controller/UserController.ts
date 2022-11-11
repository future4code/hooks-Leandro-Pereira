import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { createUser } from "../model/user";

export class UserController {
  private userBusiness = new UserBusiness();
  constructor() {
    this.userBusiness;
  }

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: createUser = {
        name,
        email,
        password,
      }

      const user = await this.userBusiness.createUser(input);
      res.status(201).send({ message: "Usuário criado!", user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
