import { NestFactory } from '@nestjs/core';
import { CatCafeModule } from './catcafe.modules';

async function bootstrap() {
  const app = await NestFactory.create(CatCafeModule);
  await app.listen(3000);
}
bootstrap();
