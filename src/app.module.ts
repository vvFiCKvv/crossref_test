import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicationsService } from './publications/publications.service';
import { DatabaseService } from './database/database.service';
import { ArticlesController } from './articles/articles.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticlesController],
  providers: [AppService, PublicationsService, DatabaseService],
})
export class AppModule {}
