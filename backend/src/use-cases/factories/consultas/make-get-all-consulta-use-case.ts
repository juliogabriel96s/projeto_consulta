import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository";
import { GetAllConsultasUseCase } from "../../consultas/get-all-consulta";

export function makeGetAllConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new GetAllConsultasUseCase(consultaRepository)

    return useCase
    
}