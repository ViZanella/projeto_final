import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PerfumeMark} from './perfume-mark.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfumeMarkService {
  constructor(
    @InjectRepository(PerfumeMark)
    private repository: Repository<PerfumeMark>,
  ) {}

  findAll(): Promise<PerfumeMark[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<PerfumeMark> {
    return this.repository.findOneBy({ id: id });
  }

  save(perfumeMark: PerfumeMark): Promise<PerfumeMark> {
    return this.repository.save(perfumeMark);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
