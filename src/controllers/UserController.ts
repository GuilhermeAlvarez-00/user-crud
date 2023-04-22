import { IncomingMessage, ServerResponse } from "http";
import { v4 as uuidv4 } from "uuid";

import { UserModel } from "../model/UserModel";
import { IUser } from "../types";

export class UserController {
	static getUsers(req: IncomingMessage, res: ServerResponse): void {
		const users = UserModel.getUsers();

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(users));
	}

	static createUser(req: IncomingMessage, res: ServerResponse): void {
		let body = "";

		req.on("data", (chunk) => {
			body += chunk;
		});

		req.on("end", () => {
			const { name, email }: Omit<IUser, "id" | "createdAt"> = JSON.parse(body);

			const user: IUser = {
				id: uuidv4(),
				name,
				email,
				createdAt: new Date(),
			};

			UserModel.createUser(user);

			res.writeHead(201, { "Content-Type": "application/json" });
			res.end(JSON.stringify(user));
		});
	}
}
