import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository";
import { EditConsultaUseCase } from "../../consultas/edit-consultas";

export function makeEditConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new EditConsultaUseCase(consultaRepository)

    return useCase
    
}