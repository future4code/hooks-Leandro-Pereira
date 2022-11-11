import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";

export class TokenGenerator {
  public generateToken = (id: AuthenticationData) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
      expiresIn: "2h",
    });
    return token;
  };

  public TokenData = (token: string): AuthenticationData => {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;

    return {
      id: decoded.id as string,
    };
  };
}
