import { UserDatabase } from "../data/UserDatabase"
import { generateId } from '../services/generatedId'
import { InvalidRequest } from './../error/InvalidRequest';

export class UserBusiness {
    async createUser(name: string, email: string, password: string) {
        if (!name || !email || !password) {
            throw new InvalidRequest()
         }

         const user = {
            id : generateId(),
            name,
            email,
            password
         }

         const userDatabase = new UserDatabase();
         await userDatabase.createUser(user);
    }
}