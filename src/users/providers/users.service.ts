import { Injectable } from "@nestjs/common";
import { GetUsersParamDtro } from "../dtos/get-user-param.dto";

@Injectable()
export class UsersService {

    public findAll(
        getUserParamDto: GetUsersParamDtro,
        limit:number,
        page:number
    ){
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
   public findOneById(id:number){
    return {
        id:1234,
        firstName:'Alice',
        email:'alice@doe.com',
    }
   }
}