import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository.js";
import { GetAllConsultasUseCase } from "../../consultas/get-all-consulta.js";

export function makeGetAllConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new GetAllConsultasUseCase(consultaRepository)

    return useCase
    
}