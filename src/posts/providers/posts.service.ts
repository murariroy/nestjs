import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService:UsersService,
    ){}
    public findAll(userId:string){

        // console.log(userId);

        //Usersservice
        const user =  this.usersService.findOneById(userId)

        //find a user

        return [
            {   
                user: user,
                title: 'Test Title',
                content: 'Test Content'
            },
            {   
                user:user,
                title: 'Test Title 2',
                content: 'Test Content 2'
            }
        ]
        
    }
}
