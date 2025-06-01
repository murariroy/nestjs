import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";
import { IsIn, IsInt, IsNotEmpty } from "class-validator";

export class PatchPostDto extends PartialType(CreatePostDto){
    @ApiProperty({
        description:'The id of the post that nneeds to be updated'
    })
    @IsInt()
    @IsNotEmpty()
    id: number
}