import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreatePostMetaOptionsDto } from "./dto/create-post-meta-options.dto";
import { postType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length:512,
        nullable: false,
    })
    title:string;

    @Column({
       type: 'enum',
       enum: postType,
       nullable: false,
       default:postType.POST,
    })
    postType: string;

    @Column({
        type: 'varchar',
        length: 256,
        nullable:false,
        unique:true,
    })
    slug:String;

    @Column({
       type: 'enum',
       enum: postStatus,
       nullable: false,
       default:postStatus.DRAFT,
    })
    status:postStatus;

    @Column({
        type: 'text',
        nullable: true,
    })
    content?:string;

     @Column({
        type: 'text',
        nullable: true,
    })
    schema?:string;

    @Column({
        type:'varchar',
        length:1024,
        nullable:true,
    })
    featuredImageUrl?: string;

    @Column({
        type: 'timestamp',
        nullable:true
    })
    publishOn?: Date;

    
    tags?: string[];
    metaOptions?: CreatePostMetaOptionsDto[];
}