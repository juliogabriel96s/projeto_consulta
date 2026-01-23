import { NotAllowedError } from "@/core/errors/errors/not-allowed-error.js";
import { makeCreateConsultaUseCase } from "@/use-cases/factories/consultas/make-create-consulta-uscase.js";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createConsultas(request: FastifyRequest, reply: FastifyReply){

    const createConsultaBodySchema = z.object({
        descricao: z.string().min(1),
        dataHora: z.coerce.date()
    })

    const {descricao, dataHora} = createConsultaBodySchema.parse(request.body)

    const userId = request.user.sub

    try{
        const createConsultaUseCase = makeCreateConsultaUseCase()

        const consulta = await createConsultaUseCase.execute({
            userId,
            descricao,
            dataHora
        })

        return reply.status(201).send({consulta})
    } catch(err) {
        if (err instanceof NotAllowedError) {
            return reply.status(409).send({message: err.message})
        }

        throw err
    }


}