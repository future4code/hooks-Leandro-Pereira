import { app } from './app'
import { AddressInfo } from "net"
import { Request, Response } from 'express'
import { v4 as generatorId } from 'uuid';
import {accounts} from './users' 



const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

app.post('/user/createAccount', (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body

        if ( !name || !cpf || !birthDate) throw new Error("Check that your details are correct")

        const newAccount = {
            id: generatorId(),
            name,
            cpf,
            birthDate,
        }

        accounts.push(newAccount)

        res.send("Account created successfully!")

    } catch (error) {
        res.send("Your account cannot be created")
    }
})


