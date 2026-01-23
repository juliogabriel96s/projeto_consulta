import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository.js";
import { DeleteConsultaUseCase } from "../../consultas/delete-consulta.js";

export function makeDeleteConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new DeleteConsultaUseCase(consultaRepository)

    return useCase
    
}