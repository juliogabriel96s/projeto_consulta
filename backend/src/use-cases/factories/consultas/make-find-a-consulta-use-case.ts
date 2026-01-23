import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository.js";
import { FindByAConsultaUseCase } from "../../consultas/find-by-a-consulta.js";

export function makeFindAConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new FindByAConsultaUseCase(consultaRepository)

    return useCase
    
}