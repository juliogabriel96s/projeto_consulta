import { UserCreateInput } from "../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { UserRepository } from "../user-repository";

export class PrismaUserReporitory implements UserRepository{
    async create(data: UserCreateInput){
        const user = await prisma.user.create({
            data
        })

        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })

        return user
    }

    async findById(id: number) {
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        })

        return user
    }

}