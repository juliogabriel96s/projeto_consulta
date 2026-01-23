import { Prisma, Consulta } from "@prisma/client"
export interface ConsultasRepository{
    create(data: Prisma.ConsultaUncheckedCreateInput): Promise<Consulta>
    findById(id: number): Promise<Consulta | null>
    findAll():Promise<Consulta[]>
    save(consulta: Consulta): Promise<Consulta>
    delete(consulta: Consulta): Promise<void>
    findConflict(start: Date, end: Date): Promise<Consulta | null>
}