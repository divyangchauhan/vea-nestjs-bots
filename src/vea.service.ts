import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Contract } from './contract.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionName } from './database.enum';

@Injectable()
export class VeaService {
  constructor(
    @InjectRepository(Contract, ConnectionName.DATALAKE)
    private readonly contractRepository: Repository<Contract>,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  printVeaAsciiArt(): void {
    console.log(`
      ____      __   ______        _______
      \\ \\    / /  | _____|      / /   | |
       \\ \\  / /   | |__        / /    | |
        \\ \\/ /    |  __|      / /     | |
         \\   /     | |____    / /      | |
          \\ /      |______|  /_/       |_|
    `);
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async printCountOfEvents(): Promise<void> {
    const count = await this.contractRepository.count();
    console.log(`Count of contracts: ${count}`);
  }
}
