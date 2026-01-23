import { ResourceNotFound } from "@/core/errors/errors/resource-not-found-error.js";
import { makeEditConsultaUseCase } from "@/use-cases/factories/consultas/make-edit-consulta-use-case.js";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function editConsulta(request: FastifyRequest, reply: FastifyReply) {
    
    const editConsultaParamsSchema = z.object({
       consultaId: z.coerce.number()
    })

    const editConsultaBodySchema = z.object({
        descricao: z.string().min(1),
        dataHora: z.coerce.date()
    })

    const {consultaId} = editConsultaParamsSchema.parse(request.params)
    const {descricao, dataHora} = editConsultaBodySchema.parse(request.body)

    try{
        const editConsultaUseCase = makeEditConsultaUseCase()

        const consulta = await editConsultaUseCase.execute({
            consultaId,
            descricao,
            dataHora
        })

        return reply.status(200).send({consulta})
    } catch(err) {
        if(err instanceof ResourceNotFound) {
            return reply.status(409).send({message: err.message})
        }

        throw err
    }
}