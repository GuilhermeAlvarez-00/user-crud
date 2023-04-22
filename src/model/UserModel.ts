import { IUser } from "../types";

export class UserModel {
	static users: IUser[] = [];

	static getUsers(): IUser[] {
		return this.users;
	}
}
