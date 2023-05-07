import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import {
  Document
} from 'mongoose';

export type TripDocument = Trip & Document;

@Schema()
export class Trip {
  @Prop()
  source: string;

  @Prop()
  destination: string;
  

}

export const TripSchema = SchemaFactory.createForClass(Trip);