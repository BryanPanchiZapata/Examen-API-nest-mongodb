import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCriptoDTO } from './dto/cripto.dto';
import { Cripto } from './interface/cripto.interface';

@Injectable()
export class CriptoService {
  constructor(
    @InjectModel('Cripto') private readonly criptoModel: Model<Cripto>,
  ) {}

  async getCriptos(): Promise<Cripto[]> {
    const criptos = await this.criptoModel.find();
    return criptos;
  }

  async getCripto(criptoID: string): Promise<Cripto> {
    const cripto = await this.criptoModel.findById(criptoID);
    return cripto;
  }

  async createCripto(createCriptoDTO: CreateCriptoDTO): Promise<Cripto> {
    const cripto = await new this.criptoModel(createCriptoDTO);
    return await cripto.save();
  }

  async deleteCripto(criptoID): Promise<Cripto> {
    const deleteCripto = await this.criptoModel.findOneAndDelete(criptoID);
    return deleteCripto;
  }

  async updateCripto(
    criptoID: string,
    createCriptoDTO: CreateCriptoDTO,
  ): Promise<Cripto> {
    const updateCripto = await this.criptoModel.findByIdAndUpdate(
      criptoID,
      createCriptoDTO,
      { new: true },
    );
    return updateCripto;
  }
}
