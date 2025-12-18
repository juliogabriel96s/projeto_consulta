import { Either, right } from "../../core/either";
import { Consulta } from "../../generated/prisma/client";
import { ConsultasRepository } from "../../repositories/consultas-repository";

type GetAllConsultasUseCaseResponse = Either<
{},
{
    consultas: Consulta[]
}
>

export class GetAllConsultasUseCase{
    constructor(private consultasRepository: ConsultasRepository){}

    async execute():Promise<GetAllConsultasUseCaseResponse>{
        const consultas = await this.consultasRepository.findAll()

        return right({
            consultas
        })
    }
}