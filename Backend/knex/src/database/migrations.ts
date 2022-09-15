import connection from "./connection";

const criarTabelaUsuarios = async () => {
    try {
        await connection.raw(`
            CREATE TABLE Usuarios (
            id BIGINT PRIMARY KEY,
            nome VARCHAR(40) NOT NULL,
            email VARCHAR(40) NOT NULL UNIQUE
            )
        `)

        console.log("Tabela usuarios criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Usuarios.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaUsuarios() {
    try {
        await connection.raw(`
            INSERT INTO Usuarios (id,nome, email)
            VALUES 
            (1, "Leandro", "le0406@hotmail.com"),
            (2, "Sandra", "sandrapira_couto@hotmail.com")
        `)
        
        console.log("Tabela Usuarios populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Usuarios.")
        console.log(error.sqlMessage)
    }
}

criarTabelaUsuarios()
.then(() => popularTabelaUsuarios())
.finally(() => process.exit())