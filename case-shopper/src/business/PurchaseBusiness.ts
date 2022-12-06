import { PurchaseDatabase } from "../data/PurchaseDatabase";
import {
  CustomError,
  InvalidName,
} from "../errors/CustomErrors";

export class PurchaseBusiness {

  public static getUser = async (name: string) => {
    try {
      if (!name) {
        throw new InvalidName();
      }

      const purchaseDatabase = new PurchaseDatabase()
      const result = purchaseDatabase.getUser(name)
      return result;

    } catch (error: any) {
      throw new CustomError(
        error.message || error.sqlMessage,
        error.statusCode
      );
    }
  };
}
