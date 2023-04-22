import http from "http";
import { UserRouter } from "./routes/UserRouter";

const PORT = 3001;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
	UserRouter.handleRequest(req, res);
});

server.listen(PORT, HOSTNAME, () => {
	console.log("Server running");
});
