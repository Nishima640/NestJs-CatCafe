import { readFile,writeFile } from "fs/promises"
import { CreateCatCafeDto } from "./dtos/catcafe.dto";

export class CatCafeRepository{
    async AllFoodOrders(){
        const contents = await readFile('catcafe.json','utf8');
        const catcafe = JSON.parse(contents);
        return catcafe;
    }
    async OrderById(customer_id:string){
        const contents = await readFile('catcafe.json','utf8');
        const catcafe = JSON.parse(contents);
        return catcafe[customer_id];
    }
    async CreateFoodOrder(CatCafe:CreateCatCafeDto){
        const readfile = await readFile('catcafe.json','utf8');
        const catcafe = JSON.parse(readfile);
        catcafe[CatCafe.customer_id]={
            customer_name:CatCafe.customer_name,
            customer_id:CatCafe.customer_id,
            customer_order:CatCafe.customer_order,
            order_quantity:CatCafe.order_quantity};
        await writeFile('catcafe.json',JSON.stringify(catcafe));
    }
}