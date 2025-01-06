import { Model } from 'mongoose';
import { Weather } from './weather.schema';
export declare class WeatherService {
    private weatherModel;
    constructor(weatherModel: Model<Weather>);
    getWeatherByCity(cityName: string): Promise<Weather | null>;
}
