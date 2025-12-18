import { Either, left, right } from "../../core/either"
import { ResourceNotFound } from "../../core/errors/errors/resource-not-found-error"
import { Consulta } from "../../generated/prisma/client"
import { ConsultasRepository } from "../../repositories/consultas-repository"

interface EditConsultaUseCaseRequest{
    consultaId: number
    descricao: string
    dataHora: Date
}

type EditConsultaUseCaseResponse = Either<
ResourceNotFound,
{
    consulta: Consulta
}
>

export class EditConsultaUseCase{
    constructor(private consultaRepository: ConsultasRepository){}

    async execute({
        consultaId,
        descricao,
        dataHora
    }: EditConsultaUseCaseRequest): Promise<EditConsultaUseCaseResponse>{
        const consulta = await this.consultaRepository.findById(consultaId)

        if(!consulta) {
            return left(new ResourceNotFound())
        }

        descricao = consulta.descricao
        dataHora = consulta.dataHora

        await this.consultaRepository.save(consulta)

        return right({
            consulta
        })
    }
}