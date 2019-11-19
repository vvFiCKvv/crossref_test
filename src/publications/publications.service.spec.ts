import { Test, TestingModule } from '@nestjs/testing';
import { PublicationsService } from './publications.service';
import { DatabaseService } from '../database/database.service';
import { CrossrefApiService } from '../api/crossref-api/crossref-api.service';
import { testProviders } from '../../test/mockProviders';

describe('PublicationsService', () => {
  let service: PublicationsService;
  let db: DatabaseService;
  let aggrigateResults;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: testProviders,
    }).compile();

    service = module.get<PublicationsService>(PublicationsService);
    db = module.get<DatabaseService>(DatabaseService);
    aggrigateResults = [
      {
        "doi": "10.22175\/mmb2017.10.0050",
        "title": "Association between Loin Ultimate pH and Plasma Indicators of Pre-Slaughter Stressors in Australian Lamb",
        "issn": ["2575-985X"]
      }
    ]
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an empty array with limit 0', async () => {
    jest.spyOn(db.publicationModel, 'aggregate').mockImplementation((data) => new Promise((resolve) => resolve([])));
    let res = await service.get({ limit: 0 });
    expect(res.length).toBe(0);
  });
  it('should return same values as aggregate returns', async () => {
    jest.spyOn(db.publicationModel, 'aggregate').mockImplementation((data) => new Promise((resolve) => resolve(aggrigateResults)));
    let res = await service.get({ limit: 1 });
    expect(res).toBe(aggrigateResults);
  });

  it('Save should work', async () => {
    let dataPointer = [];
    jest.spyOn(service, 'create').mockImplementation((data) => {
      for (const item of data) {
        dataPointer.push(item);
      }
      return new Promise((resolve) => resolve());
    });
    jest.spyOn(db.publicationModel, 'aggregate').mockImplementation((data) => new Promise((resolve) => resolve(dataPointer)));
    
    service.create(aggrigateResults);
    let res = await service.get();
    expect(JSON.stringify(res)).toBe(JSON.stringify(aggrigateResults));

    //double the entries
    service.create(aggrigateResults);    
    expect(JSON.stringify(res)).toBe(JSON.stringify([...aggrigateResults,...aggrigateResults]));

  });
});
