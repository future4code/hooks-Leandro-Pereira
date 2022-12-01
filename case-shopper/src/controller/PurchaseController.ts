import { Request, Response } from "express";

export class PurchaseController {
  public getUser = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const result = await PurchaseBusiness.getUser(name);
        res.status(200).send({ message: result });

    } catch (error: any) {
      res.status(400).send({message:error.message});
    }
  };
}
