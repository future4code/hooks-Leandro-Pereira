import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  InvalidRole,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  UserRole,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { Encryption } from "../services/Encryption";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const encryption = new Encryption();

export class UserBusiness {
  private userDatabase: UserDatabase;

  constructor() {
    this.userDatabase = new UserDatabase();
  }

  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" , "password" e "role".'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (role !== "NORMAL" && role !== "ADMIN") {
        throw new InvalidRole();
      }

      const id: string = idGenerator.generateId();
      const hashPassword: string = await encryption.hash(password);

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
        role: UserRole[role],
      };

      await this.userDatabase.insertUser(user);

      const token = authenticator.generateToken({ id, role: UserRole[role] });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await this.userDatabase.findUserByEmail(email);
      const comparePassword = await encryption.compare(password, user.password);

      if (!comparePassword) {
        throw new InvalidPassword();
      }

      if (!user) {
        throw new UserNotFound();
      }

      const token = authenticator.generateToken({
        id: user.id,
        role: user.role,
      });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO): Promise<void> => {
    try {
      const { name, nickname, token } = input;

      if (!name || !nickname) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const { id } = authenticator.getTokenData(token);

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      await this.userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
