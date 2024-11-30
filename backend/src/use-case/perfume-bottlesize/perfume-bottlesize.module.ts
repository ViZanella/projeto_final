import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfumeBottlesize } from './perfume-bottlesize.entity';
import { PerfumeBottlesizeService } from './perfume-bottlesize.service';
import { PerfumeBottlesizeController } from './perfume-bottlesize.controller';
import {PerfumeMark } from '../perfume-mark/perfume-mark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PerfumeMark, PerfumeBottlesize])],
  providers: [PerfumeBottlesizeService],
  controllers: [PerfumeBottlesizeController],
})
export class PerfumeBottlesizeModule {}
