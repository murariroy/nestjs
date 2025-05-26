import { Controller, Get, Post, Patch, Put,
    Delete, Param,
    Body,
    Query,Headers,Ip,ParseIntPipe
 } from '@nestjs/common';
import { log } from 'console';
import { request } from 'http';

@Controller('users')
export class UsersController {
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
        @Param('id' , ParseIntPipe) id: number | number,
         @Query('limit',ParseIntPipe) limit: any,
        @Query('page',ParseIntPipe) page: any,) {
          console.log(id);
          console.log(typeof id);
     return 'You sent a GET request to the users endpoint';
}
   
    

    @Post()
    public createUsers(@Body() request:any, @Headers() headers: any, @Ip() ip: any){
         console.log(request);
         console.log(headers);
         console.log(ip);
         
         
         
        return 'you sent a post request to users'
    }
}
