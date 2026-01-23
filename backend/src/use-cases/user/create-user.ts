import { hash } from "bcryptjs"
import { UserRepository } from "../../repositories/user-repository.js"
import { NotAllowedError } from "../../core/errors/errors/not-allowed-error.js"
import { Either, left, right } from "../../core/either.js"
import { User } from "@prisma/client"

interface CreateUserUseCaseRequest{
    name: string
    email: string
    password: string
}

type CreateUserUseCaseResponse = Either<
NotAllowedError,
{
    user: User
}
>

export class CreateUserUseCase{
    constructor(private userRepository: UserRepository){}

    async execute({
        name,
        email,
        password
    }:CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse>{
        
        const password_hash = await hash(password, 6)

        const emailAlreadyExists = await this.userRepository.findByEmail(email)

        if(emailAlreadyExists){
            return left(new NotAllowedError())
        }

        const user = await this.userRepository.create({
            name,
            email,
            password_hash
        })

        return right({
            user
        })

    }
}