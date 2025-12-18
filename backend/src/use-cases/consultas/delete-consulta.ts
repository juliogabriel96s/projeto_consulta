import { Either, left, right } from "../../core/either"
import { ResourceNotFound } from "../../core/errors/errors/resource-not-found-error"
import { ConsultasRepository } from "../../repositories/consultas-repository"

interface DeleteConsultaUseCaseRequest{
    consultaId: number
}

type DeleteConsultaUseCaseResponse = Either<
ResourceNotFound,
{}
>

export class DeleteConsultaUseCase{
    constructor(private consultaRepository: ConsultasRepository){}

    async execute({
        consultaId
    }: DeleteConsultaUseCaseRequest):Promise<DeleteConsultaUseCaseResponse>{
        const consulta = await this.consultaRepository.findById(consultaId)

        if(!consulta){
            return left(new ResourceNotFound())
        }

        return right({})
    }
}