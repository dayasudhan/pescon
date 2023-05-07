import {
  Injectable
} from '@nestjs/common';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  CreatePostDto
} from '../dto/create-post.dto';
import {
  UpdatePostDto
} from '../dto/update-post.dto';
import {
  Post,
  PostDocument
} from '../schema/post.schema';

@Injectable()
export class PostService {

  constructor(@InjectModel(Post.name) private readonly postModel: Model < PostDocument > ) {}

  async create(createPostDto: CreatePostDto): Promise < PostDocument > {
    const post = new this.postModel(createPostDto);
    return post.save();
  }

  async findAll(): Promise < PostDocument[] > {
    return this.postModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.postModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise < PostDocument > {
    return this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: string) {
    return this.postModel.findByIdAndRemove(id);
  }
}