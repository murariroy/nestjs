import {
    Body,
    Controller ,
    Get,
    Param,
    Post,
    Query,
    Req, 
    Headers,
    Ip, 
    ParseIntPipe,
    DefaultValuePipe,
    ValidationPipe,
    Patch,
} from '@nestjs/common';
import { Request } from 'express';
import { request } from 'http';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersParamDto } from './dto/get-users-param.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
     constructor(
      //injecting users serice
      private readonly usersService:  UsersService,
     ){}


     /**
      * / userws ->  return all users with default pagination
      * /users/123-> return one suer who id is 1234
      * /users?limit=1-&page=2 -> return page 2 with limit  of pagination 10
      *  
      */



    // @Get('/:id')
    // public getUsers(@Param() params: any){
    //     console.log(params);
        
    //     return " You sent a get request to user endpoints"
    // }



    // if id should be optional
    // @Get(['', ':id'])
    // getUsers() {
    //     return 'You sent a get request to user endpoints';
    // }

        @Get(['',':id'])
        @ApiOperation({
          summary: "fetches a list of registered usrs on the application"
        })
        @ApiResponse({
          status:200,
          description:"Users fetched successfully based on the query"
        })
        @ApiQuery({
          name: 'limit',
          type:'number',
          required: false,
          description:"The number of entries required per query",
          example:10

        })

        @ApiQuery({
          name: 'page',
          type:'number',
          required: false,
          description:"The position of the page number that you want api to return",
          example:1

        })
          public getUsers(
          @Param() getUserParamDto:GetUsersParamDto ,
          @Query('limit',new DefaultValuePipe(10),  ParseIntPipe) limit: number,
          @Query('page',new DefaultValuePipe(1),ParseIntPipe) page : number,
        ) {
            
            return  this.usersService.findAll(getUserParamDto,limit,page)
         }


   

        @Post()
        public createUsers(@Body() createUserdto: CreateUserDto){
            console.log(typeof createUserdto);
            console.log(createUserdto instanceof CreateUserDto);
            
            return 'You sent a POST request to users endpoint';
        }


        // @Post()
        // public createUsers(@Req() request: Request) {
        //     console.log('Raw request:', request); // Should not be undefined
        //      return 'You sent a POST request to users endpoint';
        // }
      
      @Patch()  
      public patchUser(@Body() patchUserDto: PatchUserDto) {
        return  patchUserDto;
      }

}
