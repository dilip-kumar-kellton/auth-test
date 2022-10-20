import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
//mongodb://localhost:27017
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/authentication'),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
