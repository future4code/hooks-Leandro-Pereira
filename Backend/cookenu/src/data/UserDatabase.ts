import { CustomError } from "../errors/CustomError";
import { editUser, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection.insert(user).into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: editUser) => {
    try {
      await UserDatabase.connection()
        .update({ name: user.name, email: user.email })
        .where({ id: user.id })
        .into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserLogged = async (id: string) => {
    const result = await UserDatabase.connection("Cookenu_recipes")
      .select("id", "name", "email")
      .where({ id });
    return result[0];
  };
}
