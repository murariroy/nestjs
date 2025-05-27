import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamDtro {

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?:number
}