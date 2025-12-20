import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository";
import { DeleteConsultaUseCase } from "../../consultas/delete-consulta";

export function makeDeleteConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new DeleteConsultaUseCase(consultaRepository)

    return useCase
    
}