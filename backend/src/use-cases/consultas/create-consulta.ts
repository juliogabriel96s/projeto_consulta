import { Either, left, right } from "../../core/either"
import { NotAllowedError } from "../../core/errors/errors/not-allowed-error"
import { Consulta } from "../../generated/prisma/client"
import { ConsultasRepository } from "../../repositories/consultas-repository"
import { UserRepository } from "../../repositories/user-repository"

interface CreateConsultaUseCaseRequest{
    userId: number
    descricao: string
    dataHora: Date
}

type CreateConsultaUseCaseResponse = Either<
NotAllowedError,
{
    consulta: Consulta
}
>

export class CreateConsultaUseCase{
    constructor(
        private userRepository: UserRepository,
        private consultaRepository: ConsultasRepository
    ){}

    async execute({
        userId,
        descricao,
        dataHora
    }: CreateConsultaUseCaseRequest): Promise<CreateConsultaUseCaseResponse>{
        const user = await this.userRepository.findById(userId)

        if(!user){
            return left(new NotAllowedError())
        }

        const end = new Date(dataHora.getTime() + 30 * 60 * 1000)

        const conflict = await this.consultaRepository.findConflict(dataHora, end)

        if(conflict){
            return left(new NotAllowedError())
        }

        const consulta = await this.consultaRepository.create({
            userId,
            descricao,
            dataHora
        })

        return right({
            consulta
        })
    }
}

