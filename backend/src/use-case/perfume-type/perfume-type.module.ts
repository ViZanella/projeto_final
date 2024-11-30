import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfumeType } from './perfume-type.entity';
import { PerfumeTypeService } from './perfume-type.service';
import { PerfumeTypeController } from './perfume-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PerfumeType])],
  providers: [PerfumeTypeService],
  controllers: [PerfumeTypeController],
})
export class PerfumeTypeModule {}
