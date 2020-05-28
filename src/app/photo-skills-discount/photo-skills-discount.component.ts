import {Component,OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
    selector : 'app-discount-label',
    templateUrl : './photo-skills-discount.component.html',
    styleUrls: ['./photo-skills-discount.component.css']
})

export class PhotoSkillsDiscount implements OnInit {
    @Input() skill
    constructor() {

    }
    ngOnInit(){

    }
}

