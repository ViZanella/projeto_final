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
import { PerfumeBottlesizeService } from './perfume-bottlesize.service';
import { PerfumeBottlesize } from './perfume-bottlesize.entity';

@Controller('/perfume-bottlesizes')
export class PerfumeBottlesizeController {
  constructor(private service: PerfumeBottlesizeService) {}

  @Get()
  findAll(): Promise<PerfumeBottlesize[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<PerfumeBottlesize> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume Bottlesize not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() perfumeBottlesize: PerfumeBottlesize): Promise<PerfumeBottlesize> {
    return this.service.save(perfumeBottlesize);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() perfumeBottlesize: PerfumeBottlesize,
  ): Promise<PerfumeBottlesize> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume Bottlesize  not found', HttpStatus.NOT_FOUND);

    perfumeBottlesize.id = found.id;

    return this.service.save(perfumeBottlesize);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle model not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}
