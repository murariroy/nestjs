// import { postType } from "../enums/postType.enum";
// import { postStatus } from "../enums/postStatus.enum";
// import { IsAlpha, IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
// import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
// import { Type } from "class-transformer";
// export class CreatePostDto {
//     @IsString()
//     @MinLength(4)
//     @IsNotEmpty()
//     title: string;
    
//     @IsEnum(postType)
//     @IsNotEmpty()
//     postType: postType;

//     @IsNotEmpty()
//     @IsString()
//     @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
//         message: 'A slug should be all small letters and used only "_" and without getHeapSpaceStatistics. for example "mu-url"',

//     })
//     slug: string;

//     @IsEnum(postStatus)
//     @IsNotEmpty()
//     status: postStatus;

//     @IsString()
//     @IsOptional()
//     content?:string;

//     @IsOptional()
//     @IsJSON()
//     schema?: string;

//     @IsOptional()
//     @IsUrl()
//     featuredImageUrl?: string;

//     @IsISO8601()
//     @IsOptional()
//     publishOn?:Date;

//     @IsOptional()
//     @IsArray()
//     @IsString({each: true})
//     @MinLength(3,{each: true})
//     tags?: string[];

//     @IsOptional()
//     @IsArray()
//     @ValidateNested({each: true})
//     @Type( () => CreatePostMetaOptionsDto)
//     metaOptions?:[CreatePostMetaOptionsDto];

// }




import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from "class-validator";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({
    example:"This is title",
    description:"This is the title for the blog psot"
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;
  
  @ApiProperty({
    enum:postType,
    description:"Possible value , 'post','page','story','series'"
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;
  

  @ApiProperty({
    description:"For example- 'my-url",
    example: 'my-blog-post',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and use only "-" (e.g., "my-url")',
  })
  slug: string;
  

  @ApiProperty({
    enum:postStatus,
    description:"Possible value 'draft', scheduled', 'review', 'pub;ished'",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;
  

  @ApiProperty({
    description:"this is the content of the post",
    example:"the post content"
  })
  @IsString()
  @IsOptional()
  content?: string;
  

  @ApiProperty({
    description:"serialize  your object else a validation error will be thrown",
    example:"{\r\n \"@content\":\"https://schema.org\",\r\n \"@type\":\"Person\"\r\n}"

  })
  @IsOptional()
  @IsJSON()
  schema?: string;
  
  @ApiProperty({
    description:"Featured imaged for the blog post",
    example:"http://localhost.com/images/imageq.jpg",
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;


  @ApiPropertyOptional({
    description:"The dated on which blog post is published",
    example:"2023-10-01T12:00:00Z",
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;
  

  @ApiPropertyOptional({
    description:"array of tags passed as string values",
    example:["nestjs", "typescript"]
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];
  
  @ApiPropertyOptional({
    type:'array',
    required: false,
    items:{
      type:'object',
      properties:{
        key: {
          type: 'string',
          description:"The key can be any identifier  for your meata option",
          example:'sidevarEnabled'
        },
          value: {
          type: 'any',
          description:"Any value that want you to samve to the key",
          example:true,
        },
      }
    }
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
