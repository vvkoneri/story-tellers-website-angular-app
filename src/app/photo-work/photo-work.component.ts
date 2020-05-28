import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { skills } from '../skills';
import { QuoteService } from '../services/quotes.service'

@Component({
    selector: 'app-photo-work',
    templateUrl: './photo-work.component.html',
    styleUrls: ['./photo-work.component.css']
})

export class PhotoWorkComponent implements OnInit {
    skill;
    quotePrice;

    constructor(private route: ActivatedRoute, private quoteService: QuoteService) { }

    ngOnInit () {
        this.route.paramMap.subscribe(params => { 
            for ( let skill of skills) {
                if(skill.name == params.get('category')) {
                    this.skill = skill;
                    break;
                }
            } 
        })
    }  
    
    getQuote(skill) {
      this.quotePrice =   this.quoteService.getQuote(skill)
    }


    
}