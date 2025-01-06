import { Document } from 'mongoose';
export declare class Weather extends Document {
    cityName: string;
    temperature: number;
    feelsLike: number;
    pressure: number;
    condition: string;
    humidity: number;
    windSpeed: number;
}
export declare const WeatherSchema: import("mongoose").Schema<Weather, import("mongoose").Model<Weather, any, any, any, Document<unknown, any, Weather> & Weather & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Weather, Document<unknown, {}, import("mongoose").FlatRecord<Weather>> & import("mongoose").FlatRecord<Weather> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
