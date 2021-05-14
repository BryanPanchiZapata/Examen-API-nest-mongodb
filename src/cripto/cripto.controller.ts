import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query
} from '@nestjs/common';
import { CriptoService } from './cripto.service';
import { CreateCriptoDTO } from './dto/cripto.dto';

@Controller('cripto')
export class CriptoController {
  constructor(private criptoService: CriptoService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createCriptoDTO: CreateCriptoDTO) {
    const cripto = await this.criptoService.createCripto(createCriptoDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Criptomoneda Successfully Created',
      cripto: cripto
    });
  }

  @Get('/')
  async getCriptos(@Res() res) {
    const criptos = await this.criptoService.getCriptos();
    return res.status(HttpStatus.OK).json({
      criptos
    });
  }

  @Get('/:criptoID')
  async getCryto(@Res() res, @Param('criptoID') criptoID){
    const cripto = await this.criptoService.getCripto(criptoID);
    return res.status(HttpStatus.OK).json(cripto)
  }

  @Delete('/delete')
  async deleteCripto(@Res() res, @Query('criptoID') criptoID){
  const criptoIDelete = await this.criptoService.deleteCripto(criptoID)
  return res.status(HttpStatus.OK).json({
    message: 'Criptomoneda delete successfully',
    criptoIDelete
  })
}

@Put('/update')
async updateCripto(@Res() res, @Body() createCriptoDTO: CreateCriptoDTO, @Query('criptoID') criptoID){
  const criptoUpdate = await this.criptoService.updateCripto(criptoID, createCriptoDTO);
  return res.status(HttpStatus.OK).json({
    message: 'Criptomoneda update successfully',
    criptoUpdate
  })
}
}
