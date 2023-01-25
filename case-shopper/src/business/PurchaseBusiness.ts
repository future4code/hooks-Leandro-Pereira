import { PurchaseDatabase } from "../data/PurchaseDatabase";
import {
  CustomError,
  InvalidName,
  InvalidRequest,
} from "../errors/CustomErrors";
import { Purchase } from "../models/purchase";

export class PurchaseBusiness {
  public static getCustomerPurchases = async (name: string) => {
    try {
      if (!name) {
        throw new InvalidName();
      }

      const purchaseDatabase = new PurchaseDatabase();
      const result = purchaseDatabase.getCustomerPurchases(name);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public static addPurchase = async (products: Purchase[]) => {
    try {
      const purchaseDatabase = new PurchaseDatabase();

      if (products.length === 0) {
        throw new InvalidRequest();
      }


      await purchaseDatabase.addPurchase(products);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public static updateProduct = async (
    idPurchase: number,
    qtyProduct: number
  ) => {
    try {
      const purchaseDatabase = new PurchaseDatabase();

      if (!idPurchase || !qtyProduct || qtyProduct === 0) {
        throw new InvalidRequest();
      }
      await purchaseDatabase.updateProduct(idPurchase, qtyProduct);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public static deleteProduct = async (idPurchase: number) => {
    try {
      const purchaseDatabase = new PurchaseDatabase();

      if (!idPurchase) {
        throw new InvalidRequest();
      }

      await purchaseDatabase.deleteProduct(idPurchase);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
