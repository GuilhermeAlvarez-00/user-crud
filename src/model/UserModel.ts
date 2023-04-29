import { IUser } from "../types";

export class UserModel {
	static users: IUser[] = [];

	static getUsers(): IUser[] {
		return this.users;
	}

	static createUser(user: IUser): void {
		this.users.push(user);
	}

	static updateUser(userUpdate: Omit<IUser, "createdAt">): void {
		const userUpdateIndex = this.users.findIndex(
			(user) => user.id === userUpdate.id
		);

		if (userUpdateIndex < 0) return;

		this.users[userUpdateIndex] = {
			...this.users[userUpdateIndex],
			name: userUpdate.name,
			email: userUpdate.email,
		};
	}

	static deleteUser(userId: string): void {
		this.users = this.users.filter((user) => user.id !== userId);
	}
}
