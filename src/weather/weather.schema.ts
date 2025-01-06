import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Weather extends Document {
  @Prop({ required: true })
  cityName: string;

  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  feelsLike: number;

  @Prop({ required: true })
  pressure: number;

  @Prop({ required: true })
  condition: string;

  @Prop({ required: true })
  humidity: number;

  @Prop({ required: true })
  windSpeed: number;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);
