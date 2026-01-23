import { Either, left, right } from "../../core/either.js"
import { ResourceNotFound } from "../../core/errors/errors/resource-not-found-error.js"
import { Consulta } from "@prisma/client"
import { ConsultasRepository } from "../../repositories/consultas-repository.js"

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

        consulta.descricao = descricao
        consulta.dataHora = dataHora

        await this.consultaRepository.save(consulta)

        return right({
            consulta
        })
    }
}