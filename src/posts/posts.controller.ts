import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
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
}
