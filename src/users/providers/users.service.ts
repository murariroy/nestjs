import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService{

    constructor(
        //injecting authservice
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}
    
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
 


    /*
    Find a user by id

    */

    public findOneById(id: string){
        return {
            id:1234,
            firstName: 'Alice',
            email: 'alice@deo.com',

        }
    }
}