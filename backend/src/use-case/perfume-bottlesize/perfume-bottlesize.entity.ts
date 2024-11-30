import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PerfumeMark } from '../perfume-mark/perfume-mark.entity';

@Entity('u4-bottlesize')
export class PerfumeBottlesize {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60, nullable: true })
  name: string;

  @ManyToOne(() => PerfumeMark, { eager: true, nullable: true })
  @JoinColumn({ name: 'mark-id' })
  mark: PerfumeMark;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updatedAt: Date;
}
