import { CustomError } from "../errors/CustomErrors";
import { Purchase } from "../models/purchase";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {
  private static TABLE_NAME = "shopper_purchases";
  public getCustomerPurchases = async (name: string) => {
    const result = await PurchaseDatabase.connection(
      PurchaseDatabase.TABLE_NAME
    )
      .select()
      .where({ costumer_name: name });
    return result;
  };

  public addPurchase = async (products: Purchase[]) => {
    const id: string = IdGenerator.generateId();
    try {
     
      for (let i = 0; i < products.length; i++) {
        await PurchaseDatabase.connection("shopper_purchases").insert({
          id_purchase: id,
          id_product: products[i].id_product,
          name_product: products[i].name_product,
          qty_product: products[i].qty_product,
          tot_price: products[i].tot_price,
          date: products[i].date,
          customer_name: products[i].customer_name,
          
        });

        await PurchaseDatabase.connection.raw(`UPDATE shopper_products 
        SET qty_stock = qty_stock - ${products[i].qty_product} 
        WHERE id = ${products[i].id_product}`);
      }
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public updateProduct = async (idPurchase: number, qtyProduct: number) => {
    const qtyProd = await PurchaseDatabase.connection("shopper_purchases")
      .select("qty_product", "id_product")
      .where("id_purchase", idPurchase);

    const prodStock = await PurchaseDatabase.connection("shopper_products")
      .select("qty_stock")
      .where("id", qtyProd[0].id_product);

    if (qtyProduct > qtyProd[0].qty_product) {
      await PurchaseDatabase.connection("shopper_products")
        .where("id", qtyProd[0].id_product)
        .update({
          qty_stock:
            prodStock[0].qty_stock - (qtyProduct - qtyProd[0].qty_product),
        });
    } else {
      await PurchaseDatabase.connection("shopper_products")
        .where("id", qtyProd[0].id_product)
        .update({
          qty_stock:
            prodStock[0].qty_stock + (qtyProd[0].qty_product - qtyProduct),
        });
    }

    await PurchaseDatabase.connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .update({ qty_product: qtyProduct });
  };

  public async deleteProduct(idPurchase: number) {
    const qtyProd = await PurchaseDatabase.connection("shopper_purchases")
      .select("qty_product", "id_product")
      .where("id_purchase", idPurchase);

    const prodStock = await PurchaseDatabase.connection("shopper_products")
      .select("qty_stock")
      .where("id", qtyProd[0].id_product);

    await PurchaseDatabase.connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .del();

    await PurchaseDatabase.connection("shopper_products")
      .where("id", qtyProd[0].id_product)
      .update({
        qty_stock: qtyProd[0].qty_product + prodStock[0].qty_stock,
      });
  }
}
