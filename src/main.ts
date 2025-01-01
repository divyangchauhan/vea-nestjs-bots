import { NestFactory } from '@nestjs/core';
import { VeaModule } from './vea.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(VeaModule);

  // Start the server
  await app.listen(3000);
}

bootstrap();
