import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfume } from './perfume.entity';
import { PerfumeService } from './perfume.service';
import { PerfumeController } from './perfume.controller';
import { SupabaseModule } from 'src/@libs/supabase/supabase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Perfume]), SupabaseModule],
  providers: [PerfumeService],
  controllers: [PerfumeController],
})
export class PerfumeModule {}
