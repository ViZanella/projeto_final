import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PerfumeBottlesize } from '../perfume-bottlesize/perfume-bottlesize.entity';
import { PerfumeType } from '../perfume-type/perfume-type.entity';

@Entity('u4-perfume')
export class Perfume {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ nullable: false })
  photo: string;

  @Column({
    name: 'price',
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2,
  })
  perfumeprice: number;

  @ManyToOne(() => PerfumeType, { eager: true, nullable: false })
  @JoinColumn({ name: 'type-id' })
  type: PerfumeType;

  @ManyToOne(() => PerfumeBottlesize, { eager: true, nullable: false })
  @JoinColumn({ name: 'bottlesize-id' })
  bottlesize: PerfumeBottlesize;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updatedAt: Date;
}
