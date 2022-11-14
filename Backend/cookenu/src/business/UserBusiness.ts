import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  InvalidToken,
  UserNotFound,
} from "../errors/CustomError";
import {
  InputDto,
  LoginInputDTO,
  UpdateUserInput,
  UpdateUserInputDTO,
  user,
} from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserBusiness {
  private userdatabase = new UserDatabase();
  private tokenGenerator = new TokenGenerator();
  private hashManager = new HashManager();

  constructor() {
    this.userdatabase;
    this.tokenGenerator;
    this.hashManager;
  }

  public createUser = async (input: InputDto): Promise<string> => {
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
      const hashedPassword: string = await this.hashManager.hash(password);

      const newUser: user = {
        id,
        name,
        email,
        password: hashedPassword,
      };

      await this.userdatabase.insertUser(newUser);

      const token = this.tokenGenerator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, "Preencha os campos email e password");
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user: user = await this.userdatabase.findUserByEmail(email);

      const isValidPass = await this.hashManager.compare(
        password,
        user.password
      );

      if (!isValidPass) {
        throw new InvalidPassword();
      }

      if (!user) {
        throw new UserNotFound();
      }

      const token = this.tokenGenerator.generateToken({ id: user.id });
      return token;
    } catch (error: any) {}
  };

  public editUser = async (input: UpdateUserInputDTO) => {
    try {
      const { id, name, email, password } = input;

      if (!id || !name || !email || !password) {
        throw new CustomError(
          400,
          "Preencha os campos id, name, email e password"
        );
      }

      const editUserInput: UpdateUserInput = {
        id,
        name,
        email,
        password,
      };

      await this.userdatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserLogged = async (token: string) => {
    try {

      if(!token){
        throw new InvalidToken();
      }

      const tokenData = this.tokenGenerator.TokenData(token);
      const user = await this.userdatabase.getUserLogged(tokenData.id);

      return user;


    } catch (error:any) {
      throw new CustomError(401, error.message);
    }
  }

}
