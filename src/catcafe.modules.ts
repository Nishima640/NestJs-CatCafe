import { Module } from "@nestjs/common";
import { CatCafeController } from "./catcafe.controller";


@Module({
    controllers: [CatCafeController]
})
export class CatCafeModule{}