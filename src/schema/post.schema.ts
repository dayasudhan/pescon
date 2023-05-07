import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import {
  Document
} from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  description: string;

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

export const PostSchema = SchemaFactory.createForClass(Post);