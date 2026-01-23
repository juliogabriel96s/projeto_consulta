import { Consulta, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
import { ConsultasRepository } from "../consultas-repository.js";

export class PrismaConsultasReporitory implements ConsultasRepository{
    async create(data: Prisma.ConsultaUncheckedCreateInput) {
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
            where: {
                AND:[
                    {
                        dataHora:{
                            lt: end
                        }
                    },
                    {
                        dataHora:{
                            gte:new Date(start.getTime() - 30 * 60 * 1000)
                        }
                    }
                ]
            }
        })
    }

}