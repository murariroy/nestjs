import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-user-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
/**
 * Class to connect to usser table and perform business operation
 */
@Injectable()
export class UsersService {
    /** 
     * The method to get all the user  from the database
     */

    constructor(
        @Inject(forwardRef(() =>AuthService))
        private readonly authService:AuthService
    ){}

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit:number,
        page:number
    ){
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        

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