import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PerfumeBottlesize } from './perfume-bottlesize.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfumeBottlesizeService {
  constructor(
    @InjectRepository(PerfumeBottlesize)
    private repository: Repository<PerfumeBottlesize>,
  ) {}

  findAll(): Promise<PerfumeBottlesize[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<PerfumeBottlesize> {
    return this.repository.findOneBy({ id: id });
  }

  save(perfumeBottlesize: PerfumeBottlesize): Promise<PerfumeBottlesize> {
    return this.repository.save(perfumeBottlesize);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
