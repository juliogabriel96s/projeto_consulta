import { ResourceNotFound } from "@/core/errors/errors/resource-not-found-error.js";
import { makeDeleteConsultaUseCase } from "@/use-cases/factories/consultas/make-delete-consulta-use-case.js";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteConsulta(request: FastifyRequest, reply: FastifyReply){
    
    const deleteParamsSchema = z.object({
        consultaId: z.coerce.number()
    })

    const {consultaId} = deleteParamsSchema.parse(request.params)

    try{
        const deleteConsultaUseCase = makeDeleteConsultaUseCase()

        await deleteConsultaUseCase.execute({
            consultaId
        })

        return reply.status(204).send({})
    } catch(err) {
        if(err instanceof ResourceNotFound) {
            return reply.status(409).send({message: err.message})
        }
    }
}