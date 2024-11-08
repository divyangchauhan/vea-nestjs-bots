import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class VeaService {
  @Cron(CronExpression.EVERY_30_SECONDS)
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
}
