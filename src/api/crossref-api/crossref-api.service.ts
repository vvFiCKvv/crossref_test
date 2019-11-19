import { Injectable } from '@nestjs/common';
import * as request from 'request';
import { IPublication } from '../../interfaces/IPublication';

@Injectable()
export class CrossrefApiService {
    constructor() {
        this.getWorks().then(data => {
            console.log(data);
        });
    }
    /**
     * Request Works from crossref API 
     */
    async getWorks(): Promise<IPublication[]> {
        return new Promise<IPublication[]>((resolve, reject) => {
            request('http://api.crossref.org/works/', { json: true }, (err, res, body) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                let pubs = this.parseBody(body);

                resolve(pubs);
            });
        });
    }
    /**
     * Parse and convert crossref request body to IPublication Array
     * @param body 
     */
    public parseBody(body: { message?: { items?: IPublication[] } }) {
        //TODO: use https://github.com/hapijs/joi to validate the schema
        let pubs = <IPublication[]>[];
        if (body && body.message && body.message.items && body.message.items.length) {
            pubs = body.message.items.map((x: any) => (<IPublication>{
                doi: x.DOI,
                title: (x.title && x.title.length?x.title[0]:x.title),
                issn: x.ISSN
            }));
        }
        return pubs;
    }
}