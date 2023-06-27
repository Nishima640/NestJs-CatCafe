import {IsString} from "class-validator";

export class CreateCatCafeDto{
   @IsString()//validator
    customer_name:string

    @IsString()
    customer_id:string

    @IsString()
    customer_order:string

    @IsString()
    order_quantity:string
}
