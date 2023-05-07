import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { TripModule } from './trip/trip.module';
const MONGOURI ='mongodb+srv://heroku_z21t18n4:sudhan@cluster-z21t18n4.g35xm.mongodb.net/heroku_z21t18n4?retryWrites=true&w=majority' 
@Module({
  
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
     MongooseModule.forRoot(MONGOURI),
     ProfileModule,
     PostModule,
     TripModule,
     AuthModule,
     UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
