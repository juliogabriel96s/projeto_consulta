import { FastifyInstance } from "fastify";
import { registerUser } from "./register.js";
import { authenticateUser } from "./authenticate.js";

export async function userRoutes(app: FastifyInstance) {
    app.post("/users", registerUser)
    app.post("/sessions", authenticateUser)
}