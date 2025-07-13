import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from './dto/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        /**
         * Injecting posts service
         */
        private readonly postsService: PostsService,
    ){}

    /**
     * Get localhost:3000/posts?:userId
     */
    
    @Get(['',':userId'])
    public getposts(@Param('userId') userId:string) {
        return this.postsService.findAll(userId)
    }
    
    @ApiOperation({
        summary:"Creates a new blog post"
    })
    @ApiResponse({
        status:201,
        description:"you get a 201 response if your posst is created"
    })
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto){
        console.log(createPostDto);
        
    }
    
     @ApiOperation({
        summary:"Updates an existing blogs post"
    })
    @ApiResponse({
        status:200,
        description:"A 200 response if the post is updated sucessfully"
    })
    @Patch()
    public updatePost(@Body() patchPostsDto: PatchPostDto){
        console.log(patchPostsDto);
        
    }
}
