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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PerfumeService } from './perfume.service';
import { Perfume } from './perfume.entity';
import { SupabaseService } from 'src/@libs/supabase/supabase.service';

@Controller('/perfumes')
export class PerfumeController {
  constructor(
    private readonly service: PerfumeService,
    private readonly supabaseService: SupabaseService,
  ) {}

  @Get()
  findAll(): Promise<Perfume[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Perfume> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() perfume: Perfume): Promise<Perfume> {
    return this.service.save(perfume);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() perfume: Perfume,
  ): Promise<Perfume> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume not found', HttpStatus.NOT_FOUND);

    perfume.id = found.id;

    return this.service.save(perfume);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Perfume not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('File not found', HttpStatus.BAD_REQUEST);
    }

    const result = await this.supabaseService.upload(file);

    if (!result) {
      throw new HttpException(
        'Unable to upload file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return result;
  }
}
