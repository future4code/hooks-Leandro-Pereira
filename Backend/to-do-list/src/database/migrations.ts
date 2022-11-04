import connection from "./connection";

const criarTabelaUsuarios = async () => {
    try {
        await connection.raw(`
        CREATE TABLE Usuarios(
            id VARCHAR(40) NOT NULL PRIMARY KEY,
            name VARCHAR(40) NOT NULL,
            nickname VARCHAR(40) NOT NULL,
            email VARCHAR(40) UNIQUE NOT NULL
            );
        `)

        console.log("User table created successfully!")
    } catch (error) {
        console.log("Error creating user table!")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaUsuarios() {
    try {
        await connection.raw(`
        INSERT INTO Usuarios(id, name, nickname, email)
        VALUES("user1", "Leandro", "Chassi de grilo", "Le0406@hotmail.com"),
              ("user2", "Sandra", "Irmã Santa", "Sandrapira_couto@hotmail.com"),
              ("user3", "Sara", "Zé", "Sara454@hotmail.com");
        `)

        console.log("User table populated successfully!")
    } catch (error) {
        console.log("Error populating Users table.")
        console.log(error.sqlMessage)
    }
}

criarTabelaUsuarios()
    .then(() => popularTabelaUsuarios())
    .finally(() => process.exit())

