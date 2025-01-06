// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.HOST,
    methods: 'GET',
  }); 
  await app.listen(3000);
}
bootstrap();
