import { Module } from '@nestjs/common';
import { VeaService } from './vea.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [VeaService],
  exports: [VeaService],
})
export class VeaModule {}
