import {connection} from "./connection";
import users from "./users.json";
import products from "./products.json";
import purchases from "./purchases.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE labecommerce_users(
      id VARCHAR(40) PRIMARY KEY,
      name VARCHAR(40) NOT NULL,
      email VARCHAR(40) NOT NULL UNIQUE,
      password CHAR(40)
      );

      CREATE TABLE labecommerce_products(
         id VARCHAR(40) PRIMARY KEY,
         name VARCHAR(40) NOT NULL,
         price BIGINT NOT NULL,
         image_url VARCHAR(255)
         );

      CREATE TABLE labecommerce_purchases(
         id VARCHAR(40) PRIMARY KEY,
         user_id VARCHAR(40) NOT NULL,
         product_id VARCHAR(40) NOT NULL,
         quantity BIGINT NOT NULL,
         total_price BIGINT NOT NULL,
         FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
         FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
         );
`)
   .then(() => { console.log("Tables Created Sucessfully!") })
   .catch(printError)

const insertUsers = () => connection("labecommerce_users")
   .insert(users)
   .then(() => { console.log("User Created Successfully!") })
   .catch(printError)

const insertProducts = () => connection("labecommerce_products")
   .insert(products)
   .then(() => { console.log("Products Created Successfully!") })
   .catch(printError)

const insertPurchases = () => connection("labecommerce_purchases")
   .insert(purchases)
   .then(() => { console.log("Purchases Created Successfully!") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertProducts)
   .then(insertPurchases)
   .finally(closeConnection)