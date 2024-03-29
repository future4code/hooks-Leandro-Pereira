import * as bcrypt from "bcryptjs";

export class HashManager {
  async hash(plainText: string): Promise<string> {
    const count = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(count);

    return bcrypt.hashSync(plainText, salt);
  }

  async compare(plainText: string, cypherText: string): Promise<boolean> {
    return bcrypt.compareSync(plainText, cypherText);
  }
}
