import { Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        /*
        f\Injecting psots service
        */
       private readonly postsService: PostsService,
    ){}
}
