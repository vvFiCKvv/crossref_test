import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicationsService } from './publications/publications.service';
import { DatabaseService } from './database/database.service';
import { ArticlesController } from './articles/articles.controller';
import { PublicationSchema } from './schemas/publication.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CrossrefApiService } from './api/crossref-api/crossref-api.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    MongooseModule.forFeature([{ name: 'Publication', schema: PublicationSchema }])
  ],
  controllers: [ArticlesController],
  providers: [AppService, PublicationsService, DatabaseService, CrossrefApiService],
})
export class AppModule {}
