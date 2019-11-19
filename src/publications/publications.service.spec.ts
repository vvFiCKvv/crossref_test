import { Test, TestingModule } from '@nestjs/testing';
import { PublicationsService } from './publications.service';
import { DatabaseService } from '../database/database.service';
import { CrossrefApiService } from '../api/crossref-api/crossref-api.service';
import { testProviders } from '../../test/mockProviders';

describe('PublicationsService', () => {
  let service: PublicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: testProviders,
    }).compile();

    service = module.get<PublicationsService>(PublicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
