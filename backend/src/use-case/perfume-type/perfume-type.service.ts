import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PerfumeType } from './perfume-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfumeTypeService {
  constructor(
    @InjectRepository(PerfumeType)
    private repository: Repository<PerfumeType>,
  ) {}

  findAll(): Promise<PerfumeType[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<PerfumeType> {
    return this.repository.findOneBy({ id: id });
  }

  save(perfumeType: PerfumeType): Promise<PerfumeType> {
    return this.repository.save(perfumeType);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
