import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatCafeDto } from './dtos/catcafe.dto';
import { CatCafeServices } from './catcafe.services';

@Controller('catcafe')
export class CatCafeController {
    catcafeService: CatCafeServices;

    constructor(){
        this.catcafeService = new CatCafeServices();
    }
    @Get()
    listAllFoodOrders(){
        return this.catcafeService.AllFoodOrders()
    }

    @Post()
    CreateFoodOrder(@Body() body: CreateCatCafeDto){
        return this.catcafeService.CreateFoodOrder(body);
    }

    @Get('/:customer_id')
    getCustomer(@Param('customer_id') customer_id:string){
        return this.catcafeService.OrderById(customer_id);
    }

   
    
}