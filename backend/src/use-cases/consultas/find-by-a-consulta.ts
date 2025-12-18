import { Either, left, right } from "../../core/either"
import { ResourceNotFound } from "../../core/errors/errors/resource-not-found-error"
import { Consulta } from "../../generated/prisma/client"
import { ConsultasRepository } from "../../repositories/consultas-repository"

interface FindByAConsultaUseCaseRequest {
    consultaId: number
}

type FindByAConsultaUseCaseResponse = Either<
ResourceNotFound,
{
    consulta: Consulta
}
>

export class FindByAConsultaUseCase{
    constructor(private consultaRepository: ConsultasRepository){}

    async execute({
        consultaId
    }:FindByAConsultaUseCaseRequest): Promise<FindByAConsultaUseCaseResponse>{
        
        const consulta = await this.consultaRepository.findById(consultaId)

        if(!consulta){
            return left(new ResourceNotFound())
        }

        return right({
            consulta
        })
    }
}
