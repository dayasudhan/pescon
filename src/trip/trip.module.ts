import {
  Module
} from '@nestjs/common';
import {
  TripService
} from './trip.service';
import {
  TripController
} from './trip.controller';
import {
  Trip,
  TripSchema
} from '../schema/trip.schema';
import {
  MongooseModule
} from '@nestjs/mongoose';

@Module({
  imports: [
   MongooseModule.forFeature([
      {
        name: Trip.name,
        schema: TripSchema
      },
   ])
  ],
  controllers: [TripController],
  providers: [TripService]
})
export class TripModule {}