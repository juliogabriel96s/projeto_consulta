import { PrismaConsultasReporitory } from "../../../repositories/prisma/prisma-category-repository.js";
import { EditConsultaUseCase } from "../../consultas/edit-consultas.js";

export function makeEditConsultaUseCase(){
    const consultaRepository = new PrismaConsultasReporitory()
    const useCase = new EditConsultaUseCase(consultaRepository)

    return useCase
    
}