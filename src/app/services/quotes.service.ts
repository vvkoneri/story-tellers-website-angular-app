import { Injectable } from '@angular/core';
import { quotes } from '../constants/quotes'
import { Quote } from '../interfaces/quotes';

@Injectable({
    providedIn: 'root'
})

export class QuoteService {
    quotes: Quote[];
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