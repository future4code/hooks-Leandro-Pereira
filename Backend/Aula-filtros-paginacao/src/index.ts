import express, {Express} from 'express'
import cors from 'cors'
import { Request, Response } from 'express';
import users from './data/users.json'
import { getUsers } from './data/endpoints/getAllUsers';
import { AddressInfo } from "net";


const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/users", getUsers,(req: Request, res: Response)=>{
   const showUsers = users.map(user=>user)
      res.send(showUsers)
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});