import * as bcrypt from "bcryptjs";

export class Encryption {
  public async hash(s: string): Promise<string> {
    const count = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(count);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

  public async compare(s: string, hash: string): Promise<boolean> {
    return bcrypt.compare(s, hash);
  }
}
