import { Request, Response } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { Purchase } from "../models/purchase";

export class PurchaseController {
  public getCustomerPurchases = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const result = await PurchaseBusiness.getCustomerPurchases(name);
        res.status(200).send({ message: result });

    } catch (error: any) {
      res.status(400).send({message:error.message});
    }
  };

  public addPurchase = async (req: Request, res: Response) => {
    try {

      const products:Purchase[] = req.body.products;

      await PurchaseBusiness.addPurchase(products);
      res.status(200).send({ message: "Successfull purchase!" });
      
    } catch (error:any) {
      res.status(400).send({ message: error.message});
    }
  };

  public updateProduct = async (req:Request, res:Response) => {
    try {

      const {idPurchase, qtyProduct} = req.body

      await PurchaseBusiness.updateProduct(idPurchase, qtyProduct)
      res.status(200).send({message: "Updated product"})
      
    } catch (error:any) {
      res.status(400).send({ message:error.message});
    }
  };
}

