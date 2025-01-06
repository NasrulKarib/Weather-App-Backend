import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WeatherService } from './weather.service';

@ApiTags('weather') // Adds a Swagger tag to group related endpoints
@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @ApiOperation({ summary: 'Get weather information by city name' }) // Describes the endpoint's purpose
  @ApiParam({
    name: 'cityName',
    type: String,
    description: 'The name of the city to fetch weather information for',
    example: 'Kolkata',
  }) // Adds details about the parameter
  @ApiResponse({
    status: 200,
    description: 'Weather data for the specified city retrieved successfully',
    schema: {
      example: {
        cityName: 'Kolkata',
        temperature: 27.29,
        feelsLike: 26.49,
        pressure: 1011,
        condition: 'Clear',
        humidity: 27,
        windSpeed: 1.18,
      },
    },
  }) // Provides an example response
  @ApiResponse({
    status: 404,
    description: 'City not found',
    schema: {
      example: { message: 'City not found' },
    },
  }) // Describes error response
  @Get(':cityName')
  async getWeather(@Param('cityName') cityName: string) {
    const weatherData = await this.weatherService.getWeatherByCity(cityName);

    if (!weatherData) {
      return { message: 'City not found' };
    }

    return weatherData;
  }
}
