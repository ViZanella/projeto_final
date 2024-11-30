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
import { PerfumeTypeService } from './perfume-type.service';
import { PerfumeType } from './perfume-type.entity';

@Controller('/perfume-types')
export class PerfumeTypeController {
  constructor(private service: PerfumeTypeService) {}

  @Get()
  findAll(): Promise<PerfumeType[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<PerfumeType> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume Type not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() perfumeType: PerfumeType): Promise<PerfumeType> {
    return this.service.save(perfumeType);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() perfumeType: PerfumeType,
  ): Promise<PerfumeType> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume Type not found', HttpStatus.NOT_FOUND);

    perfumeType.id = found.id;

    return this.service.save(perfumeType);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume Type not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}
