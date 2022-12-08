-- Active: 1667510732134@@35.226.146.116@3306@hooks-4313439-leandro-jesus

CREATE TABLE
    shopper_products (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL (8, 2) NOT NULL,
        qty_stock BIGINT NOT NULL
    );

CREATE TABLE
    shopper_purchases(
        id_purchase BIGINT PRIMARY KEY,
        id_product INT NOT NULL,
        name_product VARCHAR(255) NOT NULL,
        qty_product INT NOT NULL,
        date DATETIME NOT NULL,
        tot_price DECIMAL (8, 2) NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_product) REFERENCES shopper_products(id)
    );