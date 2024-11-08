import { Test, TestingModule } from '@nestjs/testing';
import { VeaService } from './vea.service';

describe('VeaService', () => {
  let service: VeaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeaService],
    }).compile();

    service = module.get<VeaService>(VeaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
