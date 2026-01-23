import { PrismaUserReporitory } from "../../../repositories/prisma/prisma-user-repository.js";
import { AuthenticateUserUseCase } from "../../user/authenticate-user.js";

export function makeAuthenticateUserUseCase(){
    const userRepository = new PrismaUserReporitory()
    const useCase = new AuthenticateUserUseCase(userRepository)

    return useCase

}