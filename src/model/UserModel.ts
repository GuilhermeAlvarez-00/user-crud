import { IUser } from "../types";

export class UserModel {
	static users: IUser[] = [];

	static getUsers(): IUser[] {
		return this.users;
	}

	static createUser(user: IUser): void {
		this.users.push(user);
	}
}
