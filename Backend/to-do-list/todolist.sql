
CREATE TABLE Usuarios(
id VARCHAR(40) NOT NULL PRIMARY KEY,
name VARCHAR(40) NOT NULL,
nickname VARCHAR(40) NOT NULL,
email VARCHAR(40) UNIQUE NOT NULL
);

INSERT INTO Usuarios(id, name, nickname, email)
	VALUES("user1", "Leandro", "Chassi de grilo", "Le0406@hotmail.com"),
		  ("user2", "Sandra", "Irmã Santa", "Sandrapira_couto@hotmail.com"),
          ("user3", "Sara", "Zé", "Sara454@hotmail.com");
          
CREATE TABLE Task (
id VARCHAR(40) NOT NULL PRIMARY KEY,
titulo VARCHAR(40) NOT NULL,
descricao VARCHAR(40) NOT NULL,
dataLimite DATE NOT NULL,
status VARCHAR(10) NOT NULL,
usuario VARCHAR(40) NOT NULL,
id_usuario VARCHAR(40)

);

INSERT INTO Task (id, titulo, descricao, dataLimite, status, usuario, id_usuario)
	VALUES("task1", "Estudar", "estudar pronomes", "2022/09/30", "doing", "Leandro", "user1"),
		  ("task2", "Lavar louças", "Lavar louças com sabão neutro", "2022/09/10", "do", "Sandra", "user1"),
          ("task3", "Passear com o cachorro", "Levar o cachorro para passear no parque", "2022/09/10", "done", "Lucas", "user1");
          
SELECT * FROM Usuarios JOIN Task ON Task.id_usuario = Usuarios.id

          