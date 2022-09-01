USE`hooks-4313439-leandro-jesus`;
SET SQL_SAFE_UPDATES = 0;
CREATE TABLE Cadastro_Funcionarios(
id VARCHAR(3),
nome VARCHAR(25),
email VARCHAR(25),
PRIMARY KEY(id)
);

INSERT INTO Cadastro_Funcionarios(id, nome, email)
VALUE("001", "Leandro", "le0406@hotmail.com"),
("002", "Rogerio", "Roge@hotmail.com"),
("003", "Gabriela", "Gabi@hotmail.com");

SELECT * FROM  Cadastro_Funcionarios;

SELECT id AS "identifier", nome FROM Cadastro_Funcionarios;

SELECT * FROM Cadastro_Funcionarios
WHERE id = "002";

SELECT * FROM Cadastro_Funcionarios
WHERE nome  LIKE "%Gab%";

SELECT * FROM Cadastro_Funcionarios
WHERE nome LIKE "%l%" AND email  NOT LIKE "%g%";

INSERT INTO Cadastro_Funcionarios(id, nome, email)
VALUE("004", "Sara", "sara@hotmail.com");

DELETE FROM Cadastro_Funcionarios
WHERE id = "004";



