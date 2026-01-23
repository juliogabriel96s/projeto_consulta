import { ResourceNotFound } from "@/core/errors/errors/resource-not-found-error.js";
import { makeFindAConsultaUseCase } from "@/use-cases/factories/consultas/make-find-a-consulta-use-case.js";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function findAConsulta(request: FastifyRequest, reply: FastifyReply){
    const findAConsultaParamsSchema = z.object({
        consultaId: z.coerce.number()
    })

    const {consultaId} = findAConsultaParamsSchema.parse(request.params)

    try{
        const findAConsultaUseCase = makeFindAConsultaUseCase()

        const consulta = await findAConsultaUseCase.execute({
            consultaId
        })

        return reply.status(200).send({consulta})
    } catch(err) {
        if(err instanceof ResourceNotFound) {
            return reply.status(409).send({message: err.message})
        }

        throw err
    }
}