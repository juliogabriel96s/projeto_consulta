import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify/types/request.js";

export function verifyUserRole(
    roleToVerify: 'PACIENTE' | 'DOUTOR'
){
    return async(request: FastifyRequest, reply: FastifyReply) =>{
        const {role} = request.user

        if(role !== roleToVerify){
            return reply.status(401).send({message: "Unhauthorized"})
        }
    }
}