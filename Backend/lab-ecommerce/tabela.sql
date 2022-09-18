CREATE TABLE labecommerce_users(
id VARCHAR(40) PRIMARY KEY,
name VARCHAR(40) NOT NULL,
email VARCHAR(40) NOT NULL UNIQUE,
password CHAR(40)
);

INSERT INTO labecommerce_users(id, name, email, password)
VALUES("user1", "Erico", "Erico_rubio@hotmail.com", "224400"),
      ("user2", "Marcos", "Marcos_bergamo@hotmail.com", "123456"),
      ("user3", "Katia", "Katia_Lino@hotmail.com", "159785");
      
CREATE TABLE labecommerce_products(
id VARCHAR(40) PRIMARY KEY,
name VARCHAR(40) NOT NULL,
price BIGINT NOT NULL,
image_url VARCHAR(255)
);

INSERT INTO labecommerce_products(id, name, price, image_url)
VALUES("product1", "Televisão 4K",  7500, "https://i.imgur.com/5a0gRfs.jpg"),
      ("product2", "Notebook Acer",  3200, "https://i.imgur.com/iKm9KAx.jpg"),
      ("product3", "Calculadora",  50, "https://i.imgur.com/pwO7vAE.jpg"),
      ("product4", "Smartphone",  1999, "https://i.imgur.com/QeuzMtA.jpg"),
      ("product5", "Processador i5 10TH GEN",  1200, "https://i.imgur.com/DH1PXTE.jpg"),
      ("product6", "HD Externo 3TB",  3500, "https://i.imgur.com/DNINOJN.jpg"),
      ("product7", "Gift Card 12 Meses",  300, "https://i.imgur.com/3AWXSVE.jpg"),
      ("product8", "Cabo HDMI",  67, "https://i.imgur.com/k6NEzZC.jpg");
      
 CREATE TABLE labecommerce_purchases(
 id VARCHAR(40) PRIMARY KEY,
 user_id VARCHAR(40) NOT NULL,
 product_id VARCHAR(40) NOT NULL,
 quantity BIGINT NOT NULL,
 total_price BIGINT NOT NULL,
 FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
 FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
 );
 
select * from labecommerce_products
  