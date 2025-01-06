import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal : true
      }
    ),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB}:${process.env.PASS}@selise.n6av5.mongodb.net/?retryWrites=true&w=majority&appName=Selise`),
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
