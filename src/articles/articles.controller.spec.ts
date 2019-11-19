import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { DatabaseService } from '../database/database.service';
import { PublicationsService } from '../publications/publications.service';
import { testProviders } from '../../test/mockProviders';

describe('Articles Controller', () => {
  let controller: ArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: testProviders
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
