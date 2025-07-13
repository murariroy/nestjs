import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

/**
 * Class to connect to users tables and perform business operations
 */ 
@Injectable()
export class UsersService{
    /**
     * 
     * injecting a authService
     */
    constructor(
        
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}
    /**
     * The meethod to get all the users from the databases
     */
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ){
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        
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