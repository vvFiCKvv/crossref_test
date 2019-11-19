import { Controller, Param, Get, Query } from '@nestjs/common';
import { PublicationsService } from '../publications/publications.service';
import { IPublication } from '../interfaces/IPublication';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly publicationsService: PublicationsService) { }

    @Get()
    articles(@Query('offset') offset: string, @Query('limit') limit: string): IPublication[] {

      return this.publicationsService.get({ offset: parseInt(offset), limit: parseInt(limit) });
    }
}
