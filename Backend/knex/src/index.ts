import express, { Request, Response } from "express";
import cors from "cors";
import connection from './database/connection'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//exercise 1

app.get('/buscarUsuarios', async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = await connection.raw(`
  SELECT * FROM Usuarios
`)
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message)

  }

})

//exercise 2

app.post('/criarUsuarios', async (req, res) => {
  let errorCode = 400;
  const { id, nome, email } = req.body

  try {
    if (!nome || !email) {
      throw new Error("nome ou email faltando")
    }

    const novoUsuario = {
      id: Date.now(),
      nome,
      email
    }

    await connection.raw(`
      INSERT INTO Usuarios(id, nome, email)
      VALUES(${novoUsuario.id}, "${novoUsuario.nome}", "${novoUsuario.email}")
    `)

    res.status(200).send("Usuário criado COM SUCESSO!")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

// exercise 3

app.put('/editarUsuario/:id', async (req, res) => {

  let errorCode = 400;

  try {
    const id = Number(req.params.id);
    const email = req.body.email;

    const usuario = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE id = ${id}
  `)

    await connection.raw(`
  UPDATE Usuarios
  SET email = "${email}"
  WHERE id = ${id};
`)
    res.status(200).send("usuário alterado COM SUCESSO!")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

// exercise 4

app.delete('/deleteUsuario/:id', async (req, res) => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);

    const usuario = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE id = '${id}'
    `)

    if (usuario[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    await connection.raw(`
      DELETE FROM Usuarios
      WHERE id = ${id}
    `)

    res.status(200).send("Usuário deletado COM SUCESSO!")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


