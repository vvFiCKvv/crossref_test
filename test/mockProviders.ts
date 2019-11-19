import { getModelToken } from "@nestjs/mongoose";
import { CrossrefApiService } from "../src/api/crossref-api/crossref-api.service";
import { DatabaseService } from "../src/database/database.service";
import { PublicationsService } from "../src/publications/publications.service";
import { AppService } from "../src/app.service";

export const testProviders = [
    AppService, PublicationsService, DatabaseService,
    { provide: CrossrefApiService, useValue: { getWorks: () => new Promise((resolve, reject) => resolve([])) } },
    {
        provide: getModelToken('Publication'),
        useValue: {
            "doi": "10.22175\/mmb2017.10.0050",
            "title": "Association between Loin Ultimate pH and Plasma Indicators of Pre-Slaughter Stressors in Australian Lamb",
            "issn": ["2575-985X"]
        },
    }
]