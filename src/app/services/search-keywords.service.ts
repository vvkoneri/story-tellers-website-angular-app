import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from './network.service';
import { Observable } from 'rxjs';

import { Search } from '../interfaces/search';

@Injectable({
    providedIn : 'root'
})

export class SearchKeywordsService {
    __userIp;

    constructor(private __netSvc: NetworkService, private __httpClient: HttpClient){}

    async getSearchKeywords() {

        this.__userIp = await this.__netSvc.getIpAddress();
        let searchRec;
        await new Promise((resolve, reject) => {

        this.__httpClient.get<Search>("http://localhost:8000/search/records/" + this.__userIp)
            .toPromise()
            .then(res => {
                let searchRecords = res.search_keywords;

                if(searchRecords['records'] && searchRecords['records'].length > 0) {
                        let searchRecord = searchRecords['records'][searchRecords['records'].length - 1]
                        let timeDiffMins = ((new Date().getTime() - searchRecord['search_timestamp'])/1000)/60;
                        if(timeDiffMins <= 30) {
                            searchRec = searchRecord;
                        } //Search done lesser than 30 mins
                }
                resolve();
            });
        });
        //console.log(`Inside the get Search key method ${JSON.stringify(searchRec)}`);
        return searchRec;
    }
}