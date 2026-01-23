import { Either, right } from "../../core/either.js";
import { Consulta } from "@prisma/client";
import { ConsultasRepository } from "../../repositories/consultas-repository.js";

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