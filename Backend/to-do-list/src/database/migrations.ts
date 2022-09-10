import connection from "./connection";

const createUserTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Users (
            id VARCHAR(40) PRIMARY KEY,
            name VARCHAR(40) NOT NULL,
            nickname VARCHAR(40) NOT NULL            
            );
        `)

        console.log("User table created successfully!")
    } catch (error) {
        console.log("Error creating user table!")
        console.log(error.sqlMessage)
    }
}

async function populateUserTable() {
    try {
        await connection.raw(`
            INSERT INTO Users (id, name, nickname)
            VALUES 
            ("User1", "Leandro","Chassi de Grilo"),
            ("User2", "Sandra", "Irmã Santa"),
            ("User3", "João", "Joãozinho"),
            ("User4", "Victória", "Vicky"),
            ("User5", "Sara", "Zé"),
            ("User6", "Lucas", "Amendoim");
        `)

        console.log("User table populated successfully!")
    } catch (error) {
        console.log("Error populating Users table.")
        console.log(error.sqlMessage)
    }
}

createUserTable()
    .then(() => populateUserTable())
    .finally(() => process.exit())

