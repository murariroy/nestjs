import {
    Controller, Get, Post, Patch, Put,
    Delete, Param,
    Body,
    Query, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe,
} from '@nestjs/common';
import { log } from 'console';
import { request } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDtro } from './dtos/get-user-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
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
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDtro,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: any,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: any,
    ) {
        
        return this.usersService.findAll(getUserParamDto,limit,page);
    }
     

    @Post()
    public createUsers(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto instanceof CreateUserDto);
        return ' You sent a psot request to the user endpint'
        
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return patchUserDto;
    }

   
}
