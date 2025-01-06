import { WeatherService } from './weather.service';
export declare class WeatherController {
    private weatherService;
    constructor(weatherService: WeatherService);
    getWeather(cityName: string): Promise<import("./weather.schema").Weather | {
        message: string;
    }>;
}
