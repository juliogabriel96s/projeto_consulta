import { FastifyInstance } from "fastify";
import { verifyJWT } from "../middlewares/verify-jwt.js";
import { createConsultas } from "./create-consultas.js";
import { verifyUserRole } from "../middlewares/role-to-verify.js";
import { deleteConsulta } from "./delete.js";
import { editConsulta } from "./edit-consultas.js";
import { findAConsulta } from "./find-by-id.js";
import { getAllConsultas } from "./get-all-consultas.js";

export async function consultaRoutes(app: FastifyInstance){
    app.addHook("onRequest", verifyJWT)

    app.post("/consultas", createConsultas)
    app.delete("/consultas/:consultaId", {onRequest:[verifyUserRole('DOUTOR')]}, deleteConsulta)
    app.put("/consultas/:consultaId", {onRequest:[verifyUserRole('DOUTOR')]}, editConsulta)
    app.get("/consultas/:consultaId", findAConsulta)
    app.get("/consultas", getAllConsultas)

}