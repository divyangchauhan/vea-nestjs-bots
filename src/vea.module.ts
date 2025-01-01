import { Module } from '@nestjs/common';
import { VeaService } from './vea.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VeaContract } from './contract.entity';
import { ConnectionName, DatabaseConnection } from './database.enum';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      name: ConnectionName.DATALAKE,
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.getOrThrow(DatabaseConnection.HOST),
          port: Number(configService.getOrThrow(DatabaseConnection.PORT)),
          username: configService.getOrThrow(DatabaseConnection.USERNAME),
          password: configService.getOrThrow(DatabaseConnection.PASSWORD),
          database: 'datalake',
          autoLoadEntities: true,
          entities: [VeaContract],
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([VeaContract], ConnectionName.DATALAKE),
  ],
  providers: [VeaService],
  exports: [VeaService],
})
export class VeaModule {}
