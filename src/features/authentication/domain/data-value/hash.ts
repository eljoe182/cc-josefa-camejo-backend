import bcrypt from 'bcrypt';

export abstract class HashString {
  public static async from(value: string): Promise<string> {
    return bcrypt.hash(value, 10);
  }

  public static equals(value: string, valueCompare: string): boolean {
    return bcrypt.compareSync(value, valueCompare);
  }
}
