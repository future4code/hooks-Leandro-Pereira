import express, { Express } from 'express';
import cors from 'cors';
import {AddressInfo} from "net"
import {clients} from './data'
import { Transactions, Client } from './data';


const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

app.post('/accountUser/create', (req, res) => {
  try {
    const {name, cpf, birthDate} = req.body
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthDate

    if(age >= 18 ) {
        const newClient = {
            name,
            cpf,
            birthDate,
            bankBalance:0,
            bankStatement:[]
        }
        clients.push(newClient)
    }

    res.send(clients)
    
  } catch (error:any) {
    res.send("")
  }

})

