import { Injectable } from '@nestjs/common';



@Injectable()
export class PublicationsService {

    get(params: { limit?: number; offset?: number } = {}) {
        if(isNaN(params.limit)){
            params.limit = 10;
        }
        if(isNaN(params.offset)){
            params.offset = 0;
        }
        console.log('Getting from db publications limit:',params.limit,'offset:', params.offset);
        return [];
    }
}
