import { Consulta, Prisma } from "../generated/prisma/client";

export interface ConsultasRepository{
    create(data: Prisma.ConsultaUncheckedCreateInput): Promise<Consulta>
    findById(id: Number): Promise<Consulta | null>
    findAll():Promise<Consulta[]>
    save(consulta: Consulta): Promise<Consulta>
    delete(consulta: Consulta): Promise<void>
    findConflict(start: Date, end: Date): Promise<Consulta | null>
}