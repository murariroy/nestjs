import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-user-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
/**
 * Class to connect to usser table and perform business operation
 */
@Injectable()
export class UsersService {
    /** 
     * The method to get all the user  from the database
     */
    constructor(
        // @Inject(forwardRef(() =>AuthService))
        // private readonly authService:AuthService,
        @InjectRepository(User)
        private usersRepository:Repository<User>
        
    ){}

    public async createUser(createUserDto:CreateUserDto){
         // check user exist with the same email

         const existingUser = await this.usersRepository.findOne({
           where: {email: createUserDto.email},
         });

         //handle exception
         // create a new user
         let newUser = this.usersRepository.create(createUserDto);
         newUser = await this.usersRepository.save(newUser);

         return newUser
    }

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit:number,
        page:number
    ){
        // const isAuth = this.authService.isAuth();
        // console.log(isAuth);
        

        return [
            {
                firstName:'john',
                email:'john@doe.com',
            },
            {
                firstName:'Alice',
                email:'alice@doe.com',
            }
        ]
    }


    /*
     Find a user by ID
    */
   public findOneById(id: string){
    return {
        id:1234,
        firstName:'Alice',
        email:'alice@doe.com',
    }
   }
}