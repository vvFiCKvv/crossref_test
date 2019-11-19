import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database.service';
import { testProviders } from '../../test/mockProviders';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: testProviders
    }).compile();

    service = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
