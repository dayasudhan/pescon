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
  CreateProfileDto
} from '../dto/create-profile.dto';
import {
  UpdateProfileDto
} from '../dto/update-profile.dto';
import {
  Profile,
  ProfileDocument
} from '../schema/profile.schema';

@Injectable()
export class ProfileService {

  constructor(@InjectModel(Profile.name) private readonly profileModel: Model < ProfileDocument > ) {}

  async create(createProfileDto: CreateProfileDto): Promise < ProfileDocument > {
    const profile = new this.profileModel(createProfileDto);
    return profile.save();
  }

  async findAll(): Promise < ProfileDocument[] > {
    console.log("profile service findalll");
    return this.profileModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.profileModel.findById(id);
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise < ProfileDocument > {
    return this.profileModel.findByIdAndUpdate(id, updateProfileDto);
  }

  async remove(id: string) {
    return this.profileModel.findByIdAndRemove(id);
  }
}