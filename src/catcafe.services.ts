import { CreateCatCafeDto } from "./dtos/catcafe.dto";
import { CatCafeRepository} from "./catcafe.respository"

export class CatCafeServices{
    catcafeRepo: CatCafeRepository;

    constructor(){
        this.catcafeRepo = new CatCafeRepository();
    }

    OrderById(customer_id:string){
        return this.catcafeRepo.OrderById(customer_id);
    }

    AllFoodOrders(){
        return this.catcafeRepo.AllFoodOrders();
    }

    CreateFoodOrder(CatCafe:CreateCatCafeDto){
        return this.catcafeRepo.CreateFoodOrder(CatCafe);
    }

}