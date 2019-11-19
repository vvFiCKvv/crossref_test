import { Controller, Param, Get, Query } from '@nestjs/common';
import { PublicationsService } from '../publications/publications.service';
import { IPublication } from '../interfaces/IPublication';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly publicationsService: PublicationsService) { }

    @Get()
    async articles(@Query('offset') offset: string, @Query('limit') limit: string): Promise<IPublication[]> {

      return await this.publicationsService.get({ offset: parseInt(offset), limit: parseInt(limit) });
    }
}
