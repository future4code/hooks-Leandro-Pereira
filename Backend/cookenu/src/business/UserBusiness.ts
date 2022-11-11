import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
} from "../errors/CustomError";
import { InputDto, user } from "../model/user";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  private userdatabase = new UserDatabase();
  constructor() {
    this.userdatabase;
  }

  public createUser = async (input: InputDto): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password" '
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = IdGenerator.generateId();

      const newUser: user = {
        id,
        name,
        email,
        password,
      };

      await this.userdatabase.insertUser(newUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
