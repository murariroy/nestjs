import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

/**
 * Class to connect to users tables and perform business operations
 */ 
@Injectable()
export class UsersService{
    
    constructor(
        /**
         * Injeecting usersrepository
         */
        @InjectRepository(User)
        private usersRepository:Repository<User>
    ){}

    public async createUser(createUserDto:CreateUserDto){
      // check is user exists with same email
      const existingUser = await this.usersRepository.findOne({
        where :{email:createUserDto.email}
      })
      // handle exception
      //create a new user
      let newUser = this.usersRepository.create(createUserDto);
      newUser = await this.usersRepository.save(newUser);

      return newUser;
    }

  
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ){
        
        
        return [
            {
                firstName:'john',
                email:'john@deo.com'
            },
            {
                firstName:'Alice',
                email:'alice@deo.com'
            }
        ]
    }
 


   /**
    * find a single user using the id of users
    */

    public findOneById(id: string){
        return {
            id:1234,
            firstName: 'Alice',
            email: 'alice@deo.com',

        }
    }
}