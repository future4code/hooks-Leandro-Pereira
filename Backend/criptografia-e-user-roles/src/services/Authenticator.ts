import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";
import { AuthenticationData, UserRole } from "../model/user";

export class Authenticator {
  public generateToken = ({
    id,
    role: UserRole,
  }: AuthenticationData): string => {
    const token = jwt.sign(
      { id, role: UserRole },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1h",
      }
    );
    return token;
  };

  getTokenData = (token: string): AuthenticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;

      return {id: payload.id as string, role: payload.role as UserRole};

    } catch (error: any) {
      console.log(error.message);
      throw new Unauthorized();
    }
  };
}
