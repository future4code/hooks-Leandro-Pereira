import app from "../app";
import connection from '../database/connection'
import { v4 as generateUserId } from "uuid"

// exercise 01

app.post("/createUser", async (req, res) => {

    try {

        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            throw new Error("Fill in the fields again!")
        }

        const newUser = {
            id: generateUserId(),
            name,
            nickname,
            email
        }

        await connection.raw(`
        INSERT INTO Usuarios (id, name, nickname, email)
        VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
    `)

        res.status(200).send("User created successfully!")
    } catch (error) {
        res.status(400).send("User created failed!")
    }

})

// exercise 02

app.get("/getUserById/:id", async (req, res) => {

    try {

        const id = req.params.id

        const user = await connection.raw(`
            SELECT id, nickname FROM Usuarios
            WHERE id = "${id}"
        `)

        if (user[0].length === 0) {
            throw new Error("User not Found!")
        }

        res.status(200).send(user[0])

    } catch (error) {
        res.status(400).send("User not found!")
    }
})

// exercise 03

app.put("/editUser/:id", async (req, res) => {

    try {

        const id = req.params.id
        const { name, nickname } = req.body

        if (!name || !nickname) {

        }

        await connection.raw(`
            UPDATE Usuarios
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = "${id}"
        `)

        res.status(200).send("table updated successfully")

    } catch (error) {
        res.status(400).send("User not found!")
    }

})

// exercise 04

app.post('/createTask', async (req, res) => {

    try {

        const { titulo, descricao, dataLimite, status, usuario, id_usuario } = req.body

        if (!titulo || !descricao || !dataLimite || !status || !usuario || !id_usuario) {
            throw new Error("Fill in the fields again!")
        }

        const newTask = {
            id: generateUserId(),
            titulo,
            descricao,
            dataLimite,
            status,
            usuario,
            id_usuario
        }

        await connection.raw(`
            INSERT INTO Task(id, titulo, descricao, dataLimite, status, usuario, id_usuario)
            VALUES("${newTask.id}", "${newTask.titulo}", "${newTask.descricao}", 
            "${newTask.dataLimite}", "${newTask.status}", "${newTask.usuario}" ,
            "${newTask.id_usuario}");
        `)

        res.status(200).send("Task created successfully!")


    } catch (error) {
        res.status(404).send("Task not created!")
    }
})

// exercise 05

app.get("/getTaskById/:id", async (req, res) => {

    try {

        const id = req.params.id

        const task = await connection.raw(`
        SELECT * FROM Task
        WHERE id = "${id}"
    `)

        if (task[0].length === 0) {
            throw new Error("Task not Found!")
        }

        res.status(200).send(task[0])

    } catch (error) {
        res.status(400).send("Task not found!")
    }

})

// exercise 06

app.get('/getAllUsers', async (req, res)=>{

try {

    const result = await connection.raw(`
        SELECT * FROM Usuarios 
    `)

    res.send(result[0])
    
} catch (error) {
    res.status(400).send(error.message)
}

})