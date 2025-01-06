// weather.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weather } from './weather.schema';

@Injectable()
export class WeatherService {
  constructor(@InjectModel(Weather.name) private weatherModel: Model<Weather>) {}

 
  async getWeatherByCity(cityName: string): Promise<Weather | null> {
    return this.weatherModel.findOne({ cityName }).exec(); // Fetch weather data based on city name
  }
}
