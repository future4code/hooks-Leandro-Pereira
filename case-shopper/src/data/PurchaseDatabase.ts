import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {
  private static TABLE_NAME = "shopper_purchases";
  public getUser = async (name: string) => {
    const result = await PurchaseDatabase.connection(
      PurchaseDatabase.TABLE_NAME
    )
      .select()
      .where({ costumer_name: name });
    return result;
  };
}
