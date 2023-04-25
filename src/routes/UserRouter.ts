import { IncomingMessage, ServerResponse } from "http";
import { UserController } from "../controllers/UserController";

export class UserRouter {
	static handleRequest(req: IncomingMessage, res: ServerResponse) {
		if (req.url === "/users" && req.method === "GET") {
			UserController.getUsers(req, res);
		} else if (req.url === "/users/create" && req.method === "POST") {
			UserController.createUser(req, res);
		} else if (req.url === "/users/update" && req.method === "PUT") {
			UserController.updateUser(req, res);
		}
	}
}
