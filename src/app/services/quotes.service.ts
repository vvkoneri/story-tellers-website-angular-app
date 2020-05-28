import { Injectable } from '@angular/core';
import { quotes } from '../quotes'

@Injectable({
    providedIn: 'root'
})

export class QuoteService {
    quotes;
    constructor(){
        this.quotes = quotes
    }

    getQuote(skill) {
        for(let quote of quotes) {
            if(quote.type == skill){
                 return quote.price 
            }
        }
    }
}