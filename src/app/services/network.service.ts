import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpAddress } from '../interfaces/ipaddress';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn : 'root'
})

export class NetworkService {
    constructor(private __httpClient: HttpClient ){}

    async getIpAddress() {
         let __localIp = await this.getIpUsingIpify();
         return __localIp;
    }

    
    /* getIpUsingIpify(): Observable<IpAddress> {
       return this.__httpClient.get<IpAddress>('http://api.ipify.org/?format=json');
    } */

    async getIpUsingIpify() {
        let __localIp; 
        await new Promise((resolve, reject) => {
            let apiURL = 'http://api.ipify.org/?format=json';
            this.__httpClient.get<IpAddress>(apiURL)
                .toPromise()
                .then( res => {
                    __localIp = res.ip;
                    resolve()
                })
             
        });
          return __localIp;
    }
}