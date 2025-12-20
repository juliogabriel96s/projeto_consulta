import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository";
import { FindByAConsultaUseCase } from "../../consultas/find-by-a-consulta";

export function makeFindAConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new FindByAConsultaUseCase(consultaRepository)

    return useCase
    
}