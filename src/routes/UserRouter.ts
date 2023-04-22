import { IncomingMessage, ServerResponse } from "http";
import { UserController } from "../controllers/UserController";

export class UserRouter {
	static handleRequest(req: IncomingMessage, res: ServerResponse) {
		if (req.url === "/users" && req.method === "GET") {
			UserController.getUsers(req, res);
		}
	}
}
