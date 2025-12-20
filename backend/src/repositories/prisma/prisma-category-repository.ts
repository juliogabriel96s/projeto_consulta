import { Consulta } from "../../generated/prisma/client";
import { ConsultaUncheckedCreateInput } from "../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { ConsultasRepository } from "../consultas-repository";

export class PrismaConsultasReporitory implements ConsultasRepository{
    async create(data: ConsultaUncheckedCreateInput) {
        const consulta = await prisma.consulta.create({
            data
        })

        return consulta
    }
    
    async findById(id: number) {
        const consulta = await prisma.consulta.findUnique({
            where:{
                id
            }
        })

        return consulta
    }

    async findAll() {
        const consultas = await prisma.consulta.findMany()

        return consultas
    }

    async save(data: Consulta) {
        const consulta = await prisma.consulta.update({
            where:{
                id: data.id
            },
            data
        })

        return consulta
    }

    async delete(data: Consulta) {
        const consulta = await prisma.consulta.delete({
            where: {
                id: data.id
            }
        })

        return
    }
    async findConflict(start: Date, end: Date) {
        return await prisma.consulta.findFirst({
            where:{
                dataHora:{
                    gte: start,
                    lte: end
                }
            }
        })
    }

}