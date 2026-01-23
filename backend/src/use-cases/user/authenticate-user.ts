import { compare } from "bcryptjs"
import { Either, left, right } from "../../core/either.js"
import { ResourceNotFound } from "../../core/errors/errors/resource-not-found-error.js"
import { User } from "@prisma/client"
import { UserRepository } from "../../repositories/user-repository.js"

interface AuthenticateUserUseCaseRequest{
    email: string
    password: string
}

type AuthenticateUserUseCaseResponse = Either<
ResourceNotFound,
{
    user: User
}
>

export class AuthenticateUserUseCase{
    constructor(private userRepository: UserRepository){}

    async execute({
        email,
        password
    }: AuthenticateUserUseCaseRequest): Promise<AuthenticateUserUseCaseResponse>{
       
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            return left(new ResourceNotFound())
        }

        const comparePassord = await compare(password, user.password_hash)

        if(!comparePassord){
            return left(new ResourceNotFound())
        }

        return right({
            user
        })
    }
}