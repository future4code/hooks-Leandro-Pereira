import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { createUser, LoginInputDTO, UpdateUserInputDTO } from "../model/user";

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
      };

      const token = await this.userBusiness.createUser(input);
      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };

      const token = await this.userBusiness.login(input);
      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: UpdateUserInputDTO = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        token: req.headers.authorization as string,
      };

      await this.userBusiness.editUser(input);
      res.status(201).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserLogged = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const user = await this.userBusiness.getUserLogged(token);

      res.status(200).send({ message: "Usuário logado!", user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try{

    }catch(error: any){
      res.status(400).send(error.message);
    }
  }


}
