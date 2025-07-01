import {
    Controller, Get, Post, Patch, Put,
    Delete, Param,
    Body,
    Query, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe,
} from '@nestjs/common';
import { log } from 'console';
import { request } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-user-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags,  } from '@nestjs/swagger';


@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(
        // Injecting users service
        private readonly usersService: UsersService,
    ){}
    //    @Get('/:id{/:optional}')
    //     public getUsers(
    //         @Param() params: any,
    //          @Query() query: any) {
    //        console.log(params);
    //        console.log(query);
    //      return 'You sent a GET request to the users endpoint';
    // }
    @Get('{/:id}')
    @ApiOperation({
        summary: "Fetches a list of registered users on the application"
    })
    @ApiResponse({
        status:200,
        description:"User fetched successfully based on the query"
    })
    @ApiQuery({
         name : 'limit',
         type: 'number',
         required: false,
         description: "The number of entries required per query",
         example:10
    })
        @ApiQuery({
         name : 'page',
         type: 'number',
         required: false,
         description: "The  possition of  the page number that you want  Api  to return",
         example:1 
    })
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ) {
        
        return this.usersService.findAll(getUserParamDto,limit,page);
    }
     

    @Post()
    public createUsers(@Body() createUserDto: CreateUserDto){
        
        return this.usersService.createUser(createUserDto);
        
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return patchUserDto;
    }

   
}
