import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import {
  Document
} from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop()
  FirstName: string;

  @Prop()
  SurName: string;
  
  @Prop()
  phone: number;
  // @Prop()
  // Designation: string;

  // @Prop()
  // Email: string;

  // @Prop()
  // Address: string;

  // @Prop()
  // Salary: string;

  // @Prop()
  // Gender: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);