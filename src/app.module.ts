import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriptoModule } from './cripto/cripto.module';


@Module({
  imports: [CriptoModule, MongooseModule.forRoot('mongodb://localhost/cripto-nest-mongodb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
