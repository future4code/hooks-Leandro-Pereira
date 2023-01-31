import { v4 } from "uuid";

export class IdGenerator {
  public static generateId = () => {
    return v4();
  };
}