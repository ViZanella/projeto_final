import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfumeMarkModule } from'./use-case/perfume-mark/perfume-mark.module';
import { PerfumeBottlesizeModule } from './use-case/perfume-bottlesize/perfume-bottlesize.module';
import { PerfumeTypeModule } from './use-case/perfume-type/perfume-type.module';
import { PerfumeModule } from './use-case/perfumes/perfume.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      synchronize: true
    }),
    PerfumeMarkModule,
    PerfumeBottlesizeModule,
    PerfumeTypeModule,
    PerfumeModule,
  ],
})
export class AppModule {}
