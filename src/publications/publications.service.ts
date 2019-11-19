import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { IPublication } from '../interfaces/IPublication';
import { CrossrefApiService } from '../api/crossref-api/crossref-api.service';



@Injectable()
export class PublicationsService {
    constructor(private readonly db: DatabaseService,
    private readonly crossrefApi: CrossrefApiService
    ) {
        crossrefApi.getWorks().then((pubs)=>{
            this.create(pubs);
        })
    }
    async create(data: IPublication[]) {

        for (const pub of data) {
            const createdPub = new this.db.publicationModel(pub);    
            await createdPub.save();
        }
    }
    async get(params: { limit?: number; offset?: number } = {}): Promise<IPublication[]> {
        if (isNaN(params.limit)) {
            params.limit = 10;
        }
        if (isNaN(params.offset)) {
            params.offset = 0;
        }
        console.log('Getting from db publications limit:', params.limit, 'offset:', params.offset);
        return await this.db.publicationModel.aggregate([
            { "$sort": { "doi": 1 } },
            { "$limit": params.offset + params.limit },
            { "$skip": params.offset }
        ]);
    }
}
