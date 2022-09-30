import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      throw new Error("Invalid body.");
    }

    // const newUser: User = {
    //     id: Date.now().toString(),
    //     email,
    //     password
    // }

    const user = new User(Date.now().toString(), email, password);

    const userDatabase = new UserDatabase();

    userDatabase.createUser(user);

    res.status(201).send({message: "User created successfully", user: user});
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};