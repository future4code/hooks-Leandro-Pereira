import express from "express";
import cors from 'cors'
import { AddressInfo } from "net";

import { clients } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


//exercicio 1

app.post('/user/createAccount', (req, res) => {

  const userName = req.body.name
  const userCpf = req.body.cpf
  const userBirthDate = req.body.birthDate

  const currentYear = new Date().getFullYear()
  const bornYear = userBirthDate.split("/")[2]
  const userAge = currentYear - bornYear


  const index = clients.findIndex((client) => {
    if (client.cpf === userCpf) {
      return true
    }

    else { return false }
  })

  if (index === -1 && userAge >= 18) {
    const newUser: any = {
      name: userName,
      cpf: userCpf,
      birthDate: userBirthDate,
      balance: 0,
      extract: []
    }

    clients.push(newUser)
    res.send(clients)
  }

  else {
    res.send("Account cannot be created")
  }
})

//exercicio 2

app.get("/user/bankBalance", (req, res) => {
  try {
    const userName = req.headers.name
    const userCpf = req.headers.cpf

    const bankBalance = clients.find((client) => {
      if (client.name === userName && client.cpf === userCpf) {
        return client
      }
    })

    bankBalance === undefined ? res.send("User not found!") : res.send(bankBalance)
  } catch (error) {

  }
})
