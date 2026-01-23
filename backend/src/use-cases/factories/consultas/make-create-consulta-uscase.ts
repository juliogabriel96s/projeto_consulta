import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository.js";
import { PrismaUserReporitory } from "../../../repositories/prisma/prisma-user-repository.js";
import { CreateConsultaUseCase } from "../../consultas/create-consulta.js";

export function makeCreateConsultaUseCase(){
    const userRepository = new PrismaUserReporitory()
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new CreateConsultaUseCase(
        userRepository,
        consultaRepository
    )

    return useCase
    
}