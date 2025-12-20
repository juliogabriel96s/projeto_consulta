import { PrismaUserReporitory } from "../../../repositories/prisma/prisma-user-repository";
import { AuthenticateUserUseCase } from "../../user/authenticate-user";

export function makeAuthenticateUserUseCase(){
    const userRepository = new PrismaUserReporitory()
    const useCase = new AuthenticateUserUseCase(userRepository)

    return useCase

}