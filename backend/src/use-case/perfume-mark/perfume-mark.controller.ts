import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PerfumeMarkService } from './perfume-mark.service';
import { PerfumeMark } from './perfume-mark.entity';

@Controller('/perfume-marks')
export class PerfumeMarkController {
  constructor(private service: PerfumeMarkService) {}

  @Get()
  findAll(): Promise<PerfumeMark []> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<PerfumeMark > {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Perfume Mark not found',
        HttpStatus.NOT_FOUND,
      );

    return found;
  }

  @Post()
  create(@Body() perfumeMark: PerfumeMark ): Promise<PerfumeMark > {
    return this.service.save(perfumeMark);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() perfumeMark: PerfumeMark ,
  ): Promise<PerfumeMark > {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Perfume Mark not found',
        HttpStatus.NOT_FOUND,
      );

      perfumeMark.id = found.id;

    return this.service.save(perfumeMark );
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Perfume Mark not found',
        HttpStatus.NOT_FOUND,
      );

    return this.service.remove(id);
  }
}
