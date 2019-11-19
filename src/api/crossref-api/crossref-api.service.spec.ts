import { Test, TestingModule } from '@nestjs/testing';
import { CrossrefApiService } from './crossref-api.service';

describe('CrossrefApiService', () => {
  let service: CrossrefApiService;
  let body: any;
  beforeEach(async () => {
    body = {
      "status": "ok", "message-type": "work-list", "message-version": "1.0.0", "message": {
        "facets": {}, "total-results": 109825143, "items": [
          {
            "indexed": { "date-parts": [[2019, 8, 27]], "date-time": "2019-08-27T15:47:45Z", "timestamp": 1566920865127 }, "reference-count": 0, "publisher": "American Meat Science Association", "issue": "1", "content-domain": { "domain": [], "crossmark-restriction": false }, "published-print": { "date-parts": [[2018]] }, "DOI": "10.22175\/mmb2017.10.0050", "type": "journal-article", "created": { "date-parts": [[2018, 8, 23]], "date-time": "2018-08-23T19:15:47Z", "timestamp": 1535051747000 }, "page": "254", "source": "Crossref", "is-referenced-by-count": 2, "title": ["Association between Loin Ultimate pH and Plasma Indicators of Pre-Slaughter Stressors in Australian Lamb"], "prefix": "10.22175", "volume": "2", "author": [{ "given": "Sarah M.", "family": "Stewart", "sequence": "first", "affiliation": [] }, { "given": "Peter", "family": "McGilchrist", "sequence": "additional", "affiliation": [] }, { "given": "Graham E.", "family": "Gardner", "sequence": "additional", "affiliation": [] }, { "given": "David W.", "family": "Pethick", "sequence": "additional", "affiliation": [] }], "member": "9437", "container-title": ["Meat and Muscle Biology"], "language": "en", "link": [{ "URL": "https:\/\/dl.sciencesocieties.org\/publications\/mmb\/pdfs\/2\/1\/254", "content-type": "unspecified", "content-version": "vor", "intended-application": "similarity-checking" }], "deposited": { "date-parts": [[2018, 8, 30]], "date-time": "2018-08-30T17:17:30Z", "timestamp": 1535649450000 }, "score": 1.0, "issued": { "date-parts": [[2018]] }, "references-count": 0, "journal-issue": { "published-print": { "date-parts": [[2018]] }, "issue": "1" }, "URL": "http:\/\/dx.doi.org\/10.22175\/mmb2017.10.0050", "ISSN": ["2575-985X"], "issn-type": [{ "value": "2575-985X", "type": "electronic" }]
          },
          {
            "indexed": { "date-parts": [[2019, 8, 27]], "date-time": "2019-08-27T15:47:45Z", "timestamp": 1566920865127 }, "publisher-location": "Berlin, Heidelberg", "reference-count": 4, "publisher": "Springer Berlin Heidelberg", "isbn-type": [{ "value": "9783540032229", "type": "print" }, { "value": "9783662267875", "type": "electronic" }], "content-domain": { "domain": [], "crossmark-restriction": false }, "published-print": { "date-parts": [[1964]] }, "DOI": "10.1007\/978-3-662-26787-5_53", "type": "book-chapter", "created": { "date-parts": [[2013, 7, 29]], "date-time": "2013-07-29T11:40:40Z", "timestamp": 1375098040000 }, "page": "301-304", "source": "Crossref", "is-referenced-by-count": 4, "title": ["Intrauterine Feminisierung m\u00e4nnlicher Rattenfeten durch das stark gestagen wirksame 6-chlor-\u22bf6-1,2-methylen-17 \u03b1-hydroxyprogesteronacetat"], "prefix": "10.1007", "author": [{ "given": "F.", "family": "Neumann", "sequence": "first", "affiliation": [] }, { "given": "H.", "family": "Hamada", "sequence": "additional", "affiliation": [] }], "member": "297", "reference": [{ "key": "53_CR1", "doi-asserted-by": "publisher", "first-page": "130", "DOI": "10.1126\/science.88.2275.130-a", "volume": "88", "author": "RR Greene", "year": "1938", "unstructured": "Greene, R. R., M. W. Burrill and A. C. Ivy: Science 88, 130 (1938).", "journal-title": "Science" }, { "key": "53_CR2", "first-page": "400", "volume": "8", "author": "A Raynaud", "year": "1947", "unstructured": "Raynaud, A., et M. Frilley: Ann. Endocr. (Paris) 8, 400 (1947).", "journal-title": "Ann. Endocr. (Paris)" }, { "key": "53_CR3", "first-page": "242", "volume": "36", "author": "A Jost", "year": "1947", "unstructured": "Jost, A.: Arch. Anat. micr. Morph. exp. 36, 242 (1947).", "journal-title": "Arch. Anat. micr. Morph. exp." }, { "key": "53_CR4", "first-page": "44", "volume": "49", "author": "A Jost", "year": "1950", "unstructured": "Jost, A.: Gyn\u00e9c. et Obst\u00e9t. 49, 44 (1950).", "journal-title": "Gyn\u00e9c. et Obst\u00e9t." }], "container-title": ["Schilddr\u00fcsenhormone und K\u00f6rperperipherie \/ Regulation der Schilddr\u00fcsenfunktion"], "link": [{ "URL": "http:\/\/link.springer.com\/content\/pdf\/10.1007\/978-3-662-26787-5_53", "content-type": "unspecified", "content-version": "vor", "intended-application": "similarity-checking" }], "deposited": { "date-parts": [[2019, 5, 16]], "date-time": "2019-05-16T05:45:43Z", "timestamp": 1557985543000 }, "score": 1.0, "issued": { "date-parts": [[1964]] }, "ISBN": ["9783540032229", "9783662267875"], "references-count": 4, "URL": "http:\/\/dx.doi.org\/10.1007\/978-3-662-26787-5_53", "relation": { "cites": [] }
          }
        ], "items-per-page": 20, "query": { "start-index": 0, "search-terms": null }
      }
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrossrefApiService],
    }).compile();

    service = module.get<CrossrefApiService>(CrossrefApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    let pubs = service.parseBody(body);
    expect(pubs.length).toBe(2);
    for (let index = 0; index < body.message.items.length; index++) {
      const item = body.message.items[index];
      expect(pubs[index].doi).toBe(item.DOI);
      if(item.title.length){
        expect(pubs[index].title).toBe(item.title[0]);
      }
      if(item.ISSN){
        expect(pubs[index].issn.length).toBe(item.ISSN.length);
        expect(pubs[index].issn).toBe(item.ISSN);
      }
    }
  });

});
