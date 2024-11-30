import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfumeMarkController } from './perfume-mark.controller';
import { PerfumeMark } from './perfume-mark.entity';
import { PerfumeMarkService } from './perfume-mark.service';


@Module({
  imports: [TypeOrmModule.forFeature([PerfumeMark])],
  providers: [PerfumeMarkService],
  controllers: [PerfumeMarkController],
})
export class PerfumeMarkModule {}
