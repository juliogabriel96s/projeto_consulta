import { makeGetAllConsultaUseCase } from "@/use-cases/factories/consultas/make-get-all-consulta-use-case.js";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllConsultas(request: FastifyRequest, reply: FastifyReply) {
    try{
        const getAllConsultasUseCase = makeGetAllConsultaUseCase()

        const consultas = await getAllConsultasUseCase.execute()

        return reply.status(200).send({consultas})
    } catch(err) {
        throw err
    }
}