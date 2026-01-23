import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateUserUseCase } from "../../../use-cases/factories/user/make-create-user-use-case.js";
import { NotAllowedError } from "../../../core/errors/errors/not-allowed-error.js";

export async function registerUser(request: FastifyRequest, reply: FastifyReply){

    const RegisterBodyScyhema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const {name, email, password} = RegisterBodyScyhema.parse(request.body)

    try{
        const registerUseCase = makeCreateUserUseCase()

        const user = await registerUseCase.execute({
            name,
            email, 
            password
        })

        return reply.status(201).send({user})
    } catch(err) {
        if(err instanceof NotAllowedError){
            return reply.status(409).send({message: "Email already exists"})
        }

        throw err
    }

}