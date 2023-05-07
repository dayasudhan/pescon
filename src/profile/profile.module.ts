import {
  Module
} from '@nestjs/common';
import {
  ProfileService
} from './profile.service';
import {
  ProfileController
} from './profile.controller';
import {
  Profile,
  ProfileSchema
} from '../schema/profile.schema';
import {
  MongooseModule
} from '@nestjs/mongoose';

@Module({
  imports: [
   MongooseModule.forFeature([
      {
        name: Profile.name,
        schema: ProfileSchema
      },
   ])
  ],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}