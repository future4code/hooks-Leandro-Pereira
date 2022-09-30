import { BaseDatabase } from './BaseDatabase'
import { TABLE_PURCHASES, TABLE_PRODUCTS, TABLE_USERS } from './tableNames'


export class migrations extends BaseDatabase {
    public createTables = async () => {
        await BaseDatabase.connection.raw(`
    DROP TABLE IF EXISTS ${TABLE_PURCHASES}, ${TABLE_PRODUCTS}, ${TABLE_USERS};
    
    CREATE TABLE IF NOT EXISTS ${TABLE_USERS}(
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_PRODUCTS}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(6,2) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_PURCHASES}(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        product_id VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        total_price DECIMAL(6,2) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES ${TABLE_USERS}(id),
        FOREIGN KEY (product_id) REFERENCES ${TABLE_PRODUCTS}(id)
    );
        `)

    }

}
