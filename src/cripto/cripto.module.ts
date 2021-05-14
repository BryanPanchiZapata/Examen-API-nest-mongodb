import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CriptoController } from './cripto.controller';
import { CriptoService } from './cripto.service';
import { CriptoSchema } from './schemas/cripto.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Cripto', schema: CriptoSchema}
    ])
  ],
  controllers: [CriptoController],
  providers: [CriptoService]
})
export class CriptoModule {}
