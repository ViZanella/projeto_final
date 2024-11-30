import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Perfume } from './perfume.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfumeService {
  constructor(
    @InjectRepository(Perfume)
    private repository: Repository<Perfume>,
  ) {}

  findAll(): Promise<Perfume[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Perfume> {
    return this.repository.findOneBy({ id: id });
  }

  save(perfume: Perfume): Promise<Perfume> {
    return this.repository.save(perfume);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
