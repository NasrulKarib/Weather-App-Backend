import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get(':cityName')
  async getWeather(@Param('cityName') cityName: string) {
    const weatherData = await this.weatherService.getWeatherByCity(cityName);
    
    if (!weatherData) {
      return { message: 'City not found' }; 
    }

    return weatherData; 
  }
}
