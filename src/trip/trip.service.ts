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
  CreateTripDto
} from '../dto/create-trip.dto';
import {
  UpdateTripDto
} from '../dto/update-trip.dto';
import {
  Trip,
  TripDocument
} from '../schema/trip.schema';

@Injectable()
export class TripService {

  constructor(@InjectModel(Trip.name) private readonly tripModel: Model < TripDocument > ) {}

  async create(createtripDto: CreateTripDto): Promise < TripDocument > {
    const trip = new this.tripModel(createtripDto);
    return trip.save();
  }

  async findAll(): Promise < TripDocument[] > {
    console.log("trip service findalll");
    return this.tripModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.tripModel.findById(id);
  }

  async update(id: string, updatetripDto: UpdateTripDto): Promise < TripDocument > {
    return this.tripModel.findByIdAndUpdate(id, updatetripDto);
  }

  async remove(id: string) {
    return this.tripModel.findByIdAndRemove(id);
  }
}