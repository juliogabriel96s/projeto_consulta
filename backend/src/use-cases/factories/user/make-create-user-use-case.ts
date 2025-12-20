import { PrismaUserReporitory } from "../../../repositories/prisma/prisma-user-repository";
import { CreateUserUseCase } from "../../user/create-user";

export function makeCreateUserUseCase(){
    const userRepository = new PrismaUserReporitory()
    const useCase = new CreateUserUseCase(userRepository)

    return useCase
}