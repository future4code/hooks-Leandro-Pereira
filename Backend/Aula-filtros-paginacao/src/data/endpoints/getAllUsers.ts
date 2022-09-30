import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "./types"


export const getUsers = async (req: Request, res: Response) => {
  let errorCode = 400
  try {

    let userName = req.query.name || "%"

    const result = await connection("aula48_exercicio")
      .where("name", "LIKE", `%${userName}%`)

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
}


const toUsers = (input: any): User => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type
  }
}

