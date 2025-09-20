import Database from "../src/Database";

interface IUser {
  userId: string;
  name: string;
  age: number;
}

class ExampleUserDatabase extends Database {
  private static instance: ExampleUserDatabase;

  private constructor() {
    super({
      name: "ExampleDatabase",
    });
  }

  static getInstance(): ExampleUserDatabase {
    return this.instance || (this.instance = new this());
  }

  addUser(userId: string, name: string, age: number): void {
    const user: IUser = {
      userId,
      name,
      age,
    };
    this.db.set(userId, user);
  }

  getUser(userId: string): IUser | undefined {
    return this.db.get(userId);
  }

  hasUser(userId: string): boolean {
    return this.db.has(userId);
  }
}
