import { IncomingMessage, ServerResponse } from "http";
import { UserModel } from "../model/UserModel";

export class UserController {
	static getUsers(req: IncomingMessage, res: ServerResponse): void {
		const users = UserModel.getUsers();

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(users));
	}
}
