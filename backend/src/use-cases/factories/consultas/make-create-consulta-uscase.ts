import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository";
import { PrismaUserReporitory } from "../../../repositories/prisma/prisma-user-repository";
import { CreateConsultaUseCase } from "../../consultas/create-consulta";

export function makeCreateConsultaUseCase(){
    const userRepository = new PrismaUserReporitory()
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new CreateConsultaUseCase(
        userRepository,
        consultaRepository
    )

    return useCase
    
}